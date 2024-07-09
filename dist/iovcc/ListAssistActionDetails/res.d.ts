export interface ListAssistActionDetailsResponse {
    /**
     * 请求ID
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
    /**
     * 操作详情列表
     */
    Results: {
        /**
         * 操作类型
         * @example `event`
         */
        Type: string;
        /**
         * 操作
         * @example `top`
         */
        Action: string;
        /**
         * 操作结果
         * @example `Processes: 331 total, 2 running, 329 sleeping, 1936 threads`
         */
        Data: string;
        /**
         * 设备ID
         * @example `37aac8e7d96c42ea94fd5408e351474e`
         */
        DeviceId: string;
        /**
         * 创建时间
         * @example `1525767660000`
         */
        CreatedAt: number;
        /**
         * 更新时间
         * @example `1525767660000`
         */
        UpdatedAt: number;
        /**
         * 操作时间戳ID
         * @example `1525398712826BdAw5KN`
         */
        Timestamp: string;
        /**
         * 操作ID
         * @example `40475`
         */
        ID: string;
    }[];
}
