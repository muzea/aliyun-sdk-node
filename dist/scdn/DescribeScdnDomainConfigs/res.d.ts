export interface DescribeScdnDomainConfigsResponse {
    /**
     * 请求ID。
     * @example `F8AA0364-0FDB-4AD5-AC74-D69FAB8924ED`
     */
    RequestId: string;
    DomainConfigs: {
        /**
         * 域名配置数据列表。
         */
        DomainConfig: {
            /**
             * 配置状态，包括success、testing、failed、configuring。
             * @example `success`
             */
            Status: string;
            ParentId: string;
            /**
             * 配置ID。
             * @example `5003576`
             */
            ConfigId: string;
            /**
             * Function名称。
             * @example `set_req_host_header`
             */
            FunctionName: string;
            FunctionArgs: {
                /**
                 * 各个Function。
                 */
                FunctionArg: {
                    /**
                     * 配置名称。
                     * @example `domain_name`
                     */
                    ArgName: string;
                    /**
                     * 配置值。
                     * @example `example.com`
                     */
                    ArgValue: string;
                }[];
            };
        }[];
    };
}
