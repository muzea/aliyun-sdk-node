export interface DescribeDomainsResponse {
    /**
     * 本次请求的ID。
     * @example `F908E959-ADA8-4D7B-8A05-FF2F67F50964`
     */
    RequestId: string;
    /**
     * 已配置网站业务转发规则的域名列表。
     */
    Domains: string[];
}
