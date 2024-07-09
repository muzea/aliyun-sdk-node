export interface CreateIpamPoolAllocationResponse {
    /**
     * 请求ID。
     * @example `CE9CDAE5-341E-5D0B-AC8A-2BAC707D3EB2`
     */
    RequestId: string;
    /**
     * 创建的自定义预留网段的实例ID。
     * @example `ipam-pool-alloc-112za33e4****`
     */
    IpamPoolAllocationId: string;
    /**
     * 创建的自定义预留网段。
     * @example `192.168.1.0/24`
     */
    Cidr: string;
    /**
     * 源地址段。
     * @example `192.168.0.0/16`
     */
    SourceCidr: string;
}
