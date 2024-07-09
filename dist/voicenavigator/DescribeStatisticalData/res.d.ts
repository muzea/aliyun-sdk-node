export interface DescribeStatisticalDataResponse {
    /**
     * 总多轮会话通过率
     * @example `80.00%`
     */
    TotalDialoguePassRate: string;
    /**
     * 总知识库命中率
     * @example `80.00%`
     */
    TotalKnowledgeHitRate: string;
    /**
     * 总解决率
     * @example `80.00%`
     */
    TotalResolutionRate: string;
    /**
     * 总有效回答率
     * @example `80.00%`
     */
    TotalValidAnswerRate: string;
    /**
     * 请求ID
     * @example `14C39896-AE6D-4643-9C9A-E0566B2C2DDD`
     */
    RequestId: string;
    /**
     * 解决问题总数
     * @example `80`
     */
    ResolvedQuestionTotalNum: number;
    /**
     * 总会话数
     * @example `100`
     */
    ConversationTotalNum: number;
    /**
     * 时间维度统计数据数组
     */
    StatisticalDataReports: {
        /**
         * 知识库命中率
         * @example `80.00%`
         */
        KnowledgeHitRate: string;
        /**
         * 解决问题数量
         * @example `80`
         */
        ResolvedQuestionNum: number;
        /**
         * 解决率
         * @example `80.00%`
         */
        ResolutionRate: string;
        /**
         * 统计日期
         * @example `19:00:00`
         */
        StatisticalDate: string;
        /**
         * 总会话数
         * @example `100`
         */
        TotalConversationNum: number;
        /**
         * 有效回答率
         * @example `80.0`
         */
        ValidAnswerRate: string;
        /**
         * 多轮会话通过率
         * @example `80.00%`
         */
        DialoguePassRate: string;
    }[];
}
