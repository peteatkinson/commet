CREATE TABLE IF NOT EXISTS discussions (
  discussionId             uuid          NOT NULL UNIQUE PRIMARY KEY DEFAULT uuid_generate_v4(),
  domain                   TEXT          NOT NULL,
  page                     TEXT          NOT NULL,
  ownerId            	   uuid          NOT NULL DEFAULT uuid_generate_v4(),                        
  state                    TEXT          NOT NULL, 
  lastEventId 			   uuid 		 NOT NULL,
  modifiedAt 			   TIMESTAMP	 NOT NULL,
  createdAt                TIMESTAMP     NOT NULL
);

CREATE UNIQUE INDEX discussionsIndex oN discussions(discussionId, ownerId)

CREATE TABLE commentOwners (
	ownerId                uuid          NOT NULL UNIQUE PRIMARY KEY DEFAULT uuid_generate(),
	ipAddress              TEXT          NOT NULL,
	privacyMode            TEXT          NOT NULL DEFAULT "anonymous"
)

CREATE UNIQUE INDEX commentOwnersIndex on commentOwners(ownerId, ipAddress)

CREATE TABLE IF NOT EXISTS comments (
	commentId              uuid          NOT NULL UNIQUE PRIMARY KEY DEFAULT uuid_generate_v4(),
	discussionId           uuid          NOT NULL,
	html                   TEXT          NOT NULL,
	markdown               TEXT          NOT NULL,
	ownerId                uuid          not NULL,
	state                  TEXT          NOT NULL,
	createdAt              TIMESTAMP     NOT NULL DEFAULT uuid_generate_v4(),
	lastEventId            uuid          NOT NULL,
	modifiedAt             TIMESTAMP     NOT NULL
)

CREATE UNIQUE INDEX commentsIndex ON comments(commentId, discussionId);

ALTER TABLE comments
ADD CONSTRAINT owner_id_fk_constraint
FOREIGN KEY (ownerId)
REFERENCES commentOwners(ownerId)
ON DELETE CASCADE,
ADD CONSTRAINT discussion_id_fk_constraint
FOREIGN KEY (discussionId)
REFERENCES discussions(discussionId)
ON DELETE CASCADE