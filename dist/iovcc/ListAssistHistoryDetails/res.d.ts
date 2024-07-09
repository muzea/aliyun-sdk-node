export interface ListAssistHistoryDetailsResponse {
    /**
     * 请求ID
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
    /**
     * 操作列表
     */
    Actions: {
        /**
         * 操作
         * @example `top`
         */
        Action: string;
        /**
         * 创建时间
         * @example `1525767660000`
         */
        CreatedAt: number;
        /**
         * 操作时间戳ID
         * @example `1524560987853KrvUfI1`
         */
        Timestamp: string;
        /**
         * 更新时间
         * @example `1525767660000`
         */
        UpdatedAt: number;
        /**
         * 诊断会话ID
         * @example `510`
         */
        AssistId: string;
        /**
         * 操作ID
         * @example `40475`
         */
        ID: string;
    }[];
}
