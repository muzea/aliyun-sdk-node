export interface CreateDcdnSLSRealTimeLogDeliveryResponse {
    /**
     * 请求ID。
     * @example `F32C57AA-7BF8-49AE-A2CC-9F42390F5A19`
     */
    RequestId: string;
    Content: {
        /**
         * 域名配置结果信息。
         */
        Domains: {
            /**
             * SLS实时日志状态。
             * @example `success`
             */
            Status: string;
            /**
             * SLS实时日志域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * SLS实时日志区域。
             * @example `cn`
             */
            Region: string;
            /**
             * SLS实时日志描述。
             * @example `ok`
             */
            Desc: string;
        }[];
    };
}
