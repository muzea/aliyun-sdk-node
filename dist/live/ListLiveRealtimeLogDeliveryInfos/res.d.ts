export interface ListLiveRealtimeLogDeliveryInfosResponse {
    /**
     * 请求ID。
     * @example `95D5B69F-8AEC-419B-8F3A-612B35032B0D`
     */
    RequestId: string;
    Content: {
        /**
         * 日志投递服务信息。
         */
        RealtimeLogDeliveryInfos: {
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
             * 实时投递SLS的Region。
             * @example `cn-hangzhou`
             */
            Region: string;
        }[];
    };
}
