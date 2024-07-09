export interface DescribeCdnUserConfigsResponse {
    /**
     * 请求ID。
     * @example `06D29681-B7CD-4034-A8CC-28AFFA213539`
     */
    RequestId: string;
    /**
     * 用户对应的配置。
     */
    Configs: {
        /**
         * 配置值。取值：
         * - **cc_rule**：CC规则。
         * - **ddos_dispatch**：DDoS联动调度。
         * - **edge_safe**：边缘应用安全。
         * - **blocked_regions**：区域封禁。
         * - **http_acl_policy**：精准访问控制。
         * - **bot_manager**：机器流量管理。
         * - **ip_reputation**：IP信誉库。
         * @example `{\"dcdn_allow\":[\"cc_rule\",\"ddos_dispatch\"]}`
         */
        ArgValue: string;
        /**
         * 配置名称。
         * 政企用户相关配置。
         * @example `allow_function`
         */
        ArgName: string;
        /**
         * 功能名称。
         * @example `domain_business_control`
         */
        FunctionName: string;
    }[];
}
