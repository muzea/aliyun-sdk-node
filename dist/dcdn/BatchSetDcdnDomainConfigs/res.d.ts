export interface BatchSetDcdnDomainConfigsResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    DomainConfigList: {
        /**
         * 域名配置清单。
         */
        DomainConfigModel: {
            /**
             * 配置ID，如果返回为0，则表示该条配置未配置成功，需要重新配置。
             * @example `123456`
             */
            ConfigId: number;
            /**
             * 域名。
             * @example `www.example.com`
             */
            DomainName: string;
            /**
             * 功能名称。
             * @example `set_resp_header`
             */
            FunctionName: string;
        }[];
    };
}
