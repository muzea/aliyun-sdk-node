export interface DescribeUserConfigsRequest {
    /**
     * 需要查询的配置，支持持单个查询。当前支持oss、green_manager、waf、cc_rule、ddos_dispatch、edge_safe、blocked_regions、http_acl_policy、bot_manager和ip_reputation配置。
     * @example `oss`
     */
    "Config": string;
}
