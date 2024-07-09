export interface UpdateDcdnSLSRealtimeLogDeliveryResponse {
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
             * 日志状态，取值：
             * - **success**：成功。
             * - **fail**：失败。
             * @example `success`
             */
            Status: string;
            /**
             * 域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 区域名称。
             * @example `cn`
             */
            Region: string;
            /**
             * 日志描述。
             * @example `updated`
             */
            Desc: string;
        }[];
    };
}
