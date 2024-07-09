export interface DescribeAvailableResourceRequest {
    /**
     * 地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 网络类型。
     * 取值：
     * - **vpc**：专有网络的私网负载均衡实例。
     * - **classic_internet**：公网负载均衡实例。
     * - **classic_intranet**：经典网络的私网负载均衡实例。
     * @example `vpc`
     */
    "AddressType"?: string;
    /**
     * IP地址类型。
     * 取值：
     * - **ipv4**
     * - **ipv6**
     * @example `ipv4`
     */
    "AddressIPVersion"?: string;
}
