export class Comment {
    commentId: string
    disussionId: string
    html: string
    markdown: string
    ownerId: string
    state: string
    createdAt: Date
    lastEventId: string
    modifiedAt: Date

    constructor ({ commentId = '', discussionId = '' } = {}) {
        Object.assign(this, { commentId, discussionId });
    }
}
