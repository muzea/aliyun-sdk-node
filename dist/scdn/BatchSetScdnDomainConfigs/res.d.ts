export interface BatchSetScdnDomainConfigsResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    DomainConfigList: {
        /**
         * 域名配置ID列表。
         */
        DomainConfigModel: {
            /**
             * 配置ID。
             * @example `1234567`
             */
            ConfigId: number;
            /**
             * 域名。
             * @example `www.example.com`
             */
            DomainName: string;
            /**
             * 功能。
             * @example `set_req_host_header`
             */
            FunctionName: string;
        }[];
    };
}
