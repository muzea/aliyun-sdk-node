export interface DescribeDcdnDomainConfigsResponse {
    /**
     * 请求ID。
     * @example `F8AA0364-0FDB-4AD5-AC74-D69FAB8924ED`
     */
    RequestId: string;
    DomainConfigs: {
        /**
         * 域名配置。
         */
        DomainConfig: {
            /**
             * 状态。取值：
             * - **success**：成功。
             * - **testing**：测试中。
             * - **failed**：失败。
             * - **configuring**：配置中。
             * @example `success`
             */
            Status: string;
            /**
             * 高级条件配置ID。
             * @example `1234567`
             */
            ParentId: string;
            /**
             * 配置ID。
             * @example `5068995`
             */
            ConfigId: string;
            /**
             * 功能名称。
             * @example `set_req_host_header`
             */
            FunctionName: string;
            FunctionArgs: {
                /**
                 * 功能配置。
                 */
                FunctionArg: {
                    /**
                     * 配置名称。
                     * @example `ttl`
                     */
                    ArgName: string;
                    /**
                     * 配置值。
                     * @example `13`
                     */
                    ArgValue: string;
                }[];
            };
        }[];
    };
}
