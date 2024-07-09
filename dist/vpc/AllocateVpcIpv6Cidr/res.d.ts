export interface AllocateVpcIpv6CidrResponse {
    /**
     * 预留的IPv6地址段。
     * @example `2408:XXXX:0:a600::/56`
     */
    Ipv6CidrBlock: string;
    /**
     * 请求ID。
     * @example `D20C13EA-2584-53BC-8393-69DE6D98EFF1`
     */
    RequestId: string;
}
