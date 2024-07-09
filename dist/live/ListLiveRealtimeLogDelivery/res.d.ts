export interface ListLiveRealtimeLogDeliveryResponse {
    /**
     * 请求ID。
     * @example `30559C03-86C9-4EEC-B840-0DC5F5A2189B`
     */
    RequestId: string;
    Content: {
        /**
         * 实时日志投递信息。
         */
        RealtimeLogDeliveryInfo: {
            /**
             * 日志服务状态。取值：
             * - **online**：正在服务。
             * - **offline**：停止服务。
             * @example `online`
             */
            Status: string;
            /**
             * 域名ID。
             * @example `1001010`
             */
            DmId: number;
            /**
             * 实时投递SLS的Region。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 实时投递SLS的LogStoreName。
             * @example `logstore_example`
             */
            Logstore: string;
            /**
             * 实时投递SLS的ProjectName。
             * @example `project_example`
             */
            Project: string;
            /**
             * 播流域名。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
}
