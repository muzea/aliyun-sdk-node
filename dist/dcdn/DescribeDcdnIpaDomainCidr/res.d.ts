export interface DescribeDcdnIpaDomainCidrResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 查询域名对应的回源IP段列表，以CIDR形式表示，包含IPv4与IPv6。
     * @example `["1.1.1.0/24","2.2.2.0/24","1111:2222:3333:4444:5555:0:0:0/80"]`
     */
    Cidr: string[];
}
