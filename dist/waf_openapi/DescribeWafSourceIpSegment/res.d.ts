export interface DescribeWafSourceIpSegmentResponse {
    /**
     * 本次请求的ID。
     * @example `AB2F5E31-EE96-4FD7-9560-45FF****77FF`
     */
    RequestId: string;
    /**
     * IPv4防护集群使用的WAF回源IP网段列表。
     * @example `47.XXX.XXX.192/26,……,47.XXX.XXX.0/24`
     */
    Ips: string;
    /**
     * IPv6防护集群使用的WAF回源IP网段列表。
     * @example `39.XXX.XXX.0/24,……,2408:400a:XXXX:XXXX::/56`
     */
    IpV6s: string;
}
