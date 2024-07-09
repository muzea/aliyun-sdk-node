export interface DescribeDcdnIpaDomainConfigsResponse {
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
             * 功能配置状态。
             * - **success**：成功。
             * - **testing**：测试中。
             * - **failed**：失败。
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
             * @example `protogw`
             */
            FunctionName: string;
            FunctionArgs: {
                /**
                 * 功能列表。
                 */
                FunctionArg: {
                    /**
                     * 配置名称。
                     * @example `file_type`
                     */
                    ArgName: string;
                    /**
                     * 配置值。
                     * @example `txt`
                     */
                    ArgValue: string;
                }[];
            };
        }[];
    };
}
