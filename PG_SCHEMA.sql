-- Table: public.comments

-- DROP TABLE public.comments;

CREATE TABLE IF NOT EXISTS public.comments
(
    discussion_id uuid,
    comment_id uuid NOT NULL DEFAULT uuid_generate_v4(),
    commenter_id uuid NOT NULL,
    commenter_name character varying COLLATE pg_catalog."default" NOT NULL,
    markdown text COLLATE pg_catalog."default" NOT NULL,
    html text COLLATE pg_catalog."default" NOT NULL,
    parent_id uuid,
    score smallint,
    created_date date NOT NULL DEFAULT CURRENT_DATE,
    deleted boolean,
    CONSTRAINT comments_pkey PRIMARY KEY (comment_id),
    CONSTRAINT fk_discussion_id FOREIGN KEY (discussion_id)
        REFERENCES public.discussions (discussion_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.comments
    OWNER to root;


-- Table: public.discussions

-- DROP TABLE public.discussions;

CREATE TABLE IF NOT EXISTS public.discussions
(
    discussion_id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_date date NOT NULL DEFAULT CURRENT_DATE,
    text text COLLATE pg_catalog."default",
    CONSTRAINT discussions_pkey PRIMARY KEY (discussion_id)
)

TABLESPACE pg_default;

ALTER TABLE public.discussions
    OWNER to root;