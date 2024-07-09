export interface DescribeDnsGtmAddrAttributeInfoRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 地址类型：
     * - IPV4：ipv4地址
     * - IPV6: ipv6地址
     * - DOMAIN：域名
     * @example `IPV4`
     */
    "Type": string;
    /**
     * 地址列表。
     * @example `[
          "1.1.XX.XX"
    ]`
     */
    "Addrs": string;
}
