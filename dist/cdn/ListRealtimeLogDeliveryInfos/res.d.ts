export interface ListRealtimeLogDeliveryInfosResponse {
    /**
     * 请求ID。
     * @example `95D5B69F-8AEC-419B-8F3A-612B35032B0D`
     */
    RequestId: string;
    Content: {
        /**
         * 日志信息。
         */
        RealtimeLogDeliveryInfos: {
            /**
             * 实时投递sls的LogstoreName。
             * @example `LogstoreName`
             */
            Logstore: string;
            /**
             * 实时投递sls的ProjectName。
             * @example `ProjectName`
             */
            Project: string;
            /**
             * 实时投递sls的地域，详情请参见[实时日志投递用户Region列表](~~144883~~)。
             * @example `ch-shanghai`
             */
            Region: string;
        }[];
    };
}
