export interface DescribeVsDomainConfigsResponse {
    /**
     * 请求ID。
     * @example `D94D0E1E-E71B-562D-8C18-969BB3653FBD`
     */
    RequestId: string;
    /**
     * 域名配置。
     */
    DomainConfigs: {
        /**
         * 状态。取值包括：
         * - success
         * - testing
         * - failed
         * - configuring
         * @example `success`
         */
        Status: string;
        /**
         * 配置ID。
         * @example `6295`
         */
        ConfigId: string;
        /**
         * function名称。
         * @example `aliauth`
         */
        FunctionName: string;
        /**
         * 各个function。
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
