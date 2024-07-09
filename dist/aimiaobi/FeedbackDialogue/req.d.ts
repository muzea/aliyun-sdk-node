export interface FeedbackDialogueRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `fcb14f25c9ee41ccad33a049de8f941b_p_outbound_public`
     */
    "AgentKey": string;
    /**
     * 整个页面的ID
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
     */
    "TaskId"?: string;
    /**
     * 单轮对话的ID
     * @example `75bf82fa-b71b-45d7-ae40-0b00e496cd9e`
     */
    "SessionId": string;
    /**
     * thumbsDown:点踩、thumbsUp:点赞
     * @example `thumbsDown`
     */
    "Rating"?: string;
    /**
     * 标签
     */
    "RatingTags"?: string[];
    /**
     * 客户修改后的生成结果
     * @example `test`
     */
    "ModifiedResponse"?: string;
    /**
     * 客户反馈信息
     * @example `test`
     */
    "CustomerResponse"?: string;
    /**
     * 客户认为好的生成内容
     * @example `test`
     */
    "GoodText"?: string;
}
