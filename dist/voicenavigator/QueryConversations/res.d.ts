export interface QueryConversationsResponse {
    /**
     * 总数量
     * @example `100`
     */
    TotalCount: number;
    /**
     * 每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID
     * @example `14C39896-AE6D-4643-9C9A-E0566B2C2DDD`
     */
    RequestId: string;
    /**
     * 当前页数
     * @example `1`
     */
    PageNumber: number;
    /**
     * 会话列表
     */
    Conversations: {
        /**
         * 结束时间
         * @example `1582183481000`
         */
        EndTime: number;
        /**
         * 有效回答数量
         * @example `8`
         */
        EffectiveAnswerCount: number;
        /**
         * 是否转人工
         * @example `true`
         */
        TransferredToAgent: boolean;
        /**
         * 开始时间
         * @example `1582183381000`
         */
        BeginTime: number;
        /**
         * 技能组
         * @example `AAA`
         */
        SkillGroupId: string;
        /**
         * 会话ID
         * @example `af81a389-91f0-4157-8d82-720edd02b66a`
         */
        ConversationId: string;
        /**
         * 主叫号码
         * @example `02811111111`
         */
        CallingNumber: string;
        /**
         * 用户回答数量
         * @example `10`
         */
        UserUtteranceCount: number;
    }[];
}
