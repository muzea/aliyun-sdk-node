export interface DescribeDcdnDomainStagingConfigResponse {
    /**
     * 请求ID。
     * @example `C80705BF-0F76-41FA-BAD1-5B59296A4E59`
     */
    RequestId: string;
    /**
     * 加速域名配置。
     */
    DomainConfigs: {
        /**
         * 状态。取值：
         * - success：成功。
         * - testing：测试中。
         * - failed：失败。
         * - configuring：配置中。
         * @example `success`
         */
        Status: string;
        /**
         * 配置ID。
         * @example `6295`
         */
        ConfigId: string;
        /**
         * 功能名称。
         * @example `aliauth`
         */
        FunctionName: string;
        /**
         * 功能说明。
         */
        FunctionArgs: {
            /**
             * 配置名称。
             * @example `auth_type`
             */
            ArgName: string;
            /**
             * 配置值。
             * @example `req_auth`
             */
            ArgValue: string;
        }[];
    }[];
}
