export interface DeleteTLSCipherPolicyRequest {
    /**
     * 负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * TLS策略实例ID。
     * @example `tls-bp1lp2076qx4ebridp******`
     */
    "TLSCipherPolicyId": string;
}
