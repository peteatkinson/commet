import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm'

import { CommentEntity } from './comment';

@Entity({name: 'discussions'})
export class DiscussionEntity {
  discussionId: string

  @OneToMany(() => CommentEntity, (comment: CommentEntity) => comment.discussion, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  comments: CommentEntity[]
}