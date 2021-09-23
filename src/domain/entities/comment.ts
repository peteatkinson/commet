import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { DiscussionEntity } from './discussion'

@Entity({name: 'commenets'})
export class CommentEntity {
  @Column({name: 'discussion_id'})
  disussionId: string

  @PrimaryGeneratedColumn({name: 'comment_id'})
  commentId: string

  @Column({name: 'commenter_id'})
  commenterId: string

  markdown: string

  html: string

  @Column({name: 'parent_id'})
  parentId: string

  score: number

  @Column({name: 'created_date'})
  createdDate: string

  deleted: boolean

  @ManyToOne(() => DiscussionEntity, (discussion: DiscussionEntity) => discussion.comments)
  @JoinColumn({name: 'discussion_id'})
  discussion: DiscussionEntity
}
