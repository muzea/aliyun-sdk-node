export interface DescribeLiveDomainConfigsResponse {
    /**
     * 请求ID。
     * @example `F8AA0364-0FDB-4AD5-AC74-D69FAB8924ED`
     */
    RequestId: string;
    DomainConfigs: {
        /**
         * 直播域名配置。
         */
        DomainConfig: {
            /**
             * 配置状态，取值：
             * - **success**：配置成功。
             * - **testing**：测试中。
             * - **failed**：配置失败。
             * - **configuring**：配置中。
             * @example `success`
             */
            Status: string;
            /**
             * 配置ID。
             * @example `5003576`
             */
            ConfigId: string;
            /**
             * 域名配置功能名称。
             * @example `set_req_host_header`
             */
            FunctionName: string;
            FunctionArgs: {
                /**
                 * 域名功能配置参数。
                 */
                FunctionArg: {
                    /**
                     * 参数名称。
                     * @example `domain_name`
                     */
                    ArgName: string;
                    /**
                     * 参数值。
                     * @example `developer.aliyundoc.com`
                     */
                    ArgValue: string;
                }[];
            };
        }[];
    };
}
