export interface DescribeRDDomainConfigResponse {
    /**
     * 请求ID。
     * @example `C80705BF-0F76-41FA-BAD1-5B59296A4E59`
     */
    RequestId: string;
    /**
     * 域名配置信息。
     */
    DomainConfigs: {
        /**
         * 配置ID。
         * @example `6295`
         */
        ConfigId: number;
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
         * 功能配置。
         */
        FunctionArgs: {
            /**
             * 配置名称。
             * @example `source_group_name`
             */
            ArgName: string;
            /**
             * 配置值。
             * @example `123`
             */
            ArgValue: string;
        }[];
        /**
         * 功能名称。
         * @example `set_req_host_header`
         */
        FunctionName: string;
        /**
         * 高级条件配置ID。
         * @example `1234567`
         */
        ParentId: string;
    }[];
}
