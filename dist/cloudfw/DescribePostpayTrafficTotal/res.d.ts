export interface DescribePostpayTrafficTotalResponse {
    /**
     * 所有边界防护总数。
     * @example `132`
     */
    TotalAssets: number;
    /**
     * 返回结果的请求ID。
     * @example `826B6280-9704-5643-97B1-6B47AC3F027A`
     */
    RequestId: string;
    /**
     * 总流量。包年包月版本对应为弹性处理总流量。单位：Byte。
     * @example `2320274874426`
     */
    TotalTraffic: number;
    /**
     * NAT边界防护总数。
     * @example `1`
     */
    TotalNatAssets: number;
    /**
     * NAT边界总流量。包年包月版本对应为NAT边界弹性处理总流量。单位：Byte。
     * @example `560646279`
     */
    TotalNatTraffic: number;
    /**
     * VPC边界防护总数。
     * @example `3`
     */
    TotalVpcAssets: number;
    /**
     * VPC边界总流量。包年包月版本对应为VPC边界弹性处理总流量。单位：Byte。
     * @example `2320274874426`
     */
    TotalVpcTraffic: number;
    /**
     * 互联网边界防护总数。
     * @example `128`
     */
    TotalInternetAssets: number;
    /**
     * 互联网边界总流量。包年包月版本对应为互联网边界弹性处理总流量。单位：Byte。
     * @example `2320274874426`
     */
    TotalInternetTraffic: number;
    /**
     * 包年包月版本对应为弹性处理总出账流量，即减免后的流量大小。单位：Byte。
     * @example `2320274874426`
     */
    TotalBillTraffic: number;
}
