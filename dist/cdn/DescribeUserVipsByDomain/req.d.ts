export interface DescribeUserVipsByDomainRequest {
    /**
     * 域名，只支持单个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 是否查询健康VIP。取值：
     * - **on**：健康VIP。
     * - **off**：全部VIP。
     * @example `on`
     */
    "Available"?: string;
}
