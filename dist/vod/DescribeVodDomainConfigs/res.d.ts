export interface DescribeVodDomainConfigsResponse {
    /**
     * 请求ID。
     * @example `F8AA0364-0FDB-4AD5-****-D69FAB8924ED`
     */
    RequestId: string;
    DomainConfigs: {
        /**
         * 域名配置。
         */
        DomainConfig: {
            /**
             * 域名配置状态。取值：
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
             * 功能名称。
             * @example `set_req_host_header`
             */
            FunctionName: string;
            FunctionArgs: {
                /**
                 * 功能配置详情。
                 */
                FunctionArg: {
                    /**
                     * 参数名称，为functionName的配置项。
                     * @example `domain_name`
                     */
                    ArgName: string;
                    /**
                     * 参数值，为functionName的配置项的取值。
                     * @example `example.com`
                     */
                    ArgValue: string;
                }[];
            };
        }[];
    };
}
