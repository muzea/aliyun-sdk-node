export interface DescribeDcdnDomainPropertyResponse {
    /**
     * 请求ID。
     * @example `34AB41F1-04A5-496F-8C8D-634BDBE6A9FB`
     */
    RequestId: string;
    /**
     * 查询到的加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 协议名称。取值：
     * - **udp**：UDP协议。
     * - **tcp**：TCP协议。
     * @example `udp`
     */
    Protocol: string;
}
