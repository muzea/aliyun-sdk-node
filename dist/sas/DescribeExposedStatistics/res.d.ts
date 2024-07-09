export interface DescribeExposedStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4B897D10-B3CD-4A93-A5FA-591F3ED12A86`
     */
    RequestId: string;
    /**
     * 暴露在互联网上可被黑客利用的中危漏洞总数量。
     * @example `5`
     */
    ExposedLaterVulCount: number;
    /**
     * 暴露在互联网上的您服务器的系统组件（例如OpenSSL、OpenSSH）总数量。
     * @example `7`
     */
    ExposedComponentCount: number;
    /**
     * 暴露在互联网上的端口总数量。
     * @example `6`
     */
    ExposedPortCount: number;
    /**
     * 暴露在互联网上的服务器总数量。
     * @example `100`
     */
    ExposedInstanceCount: number;
    /**
     * 暴露在互联网上的您服务器的系统密钥的总数量。
     * @example `20`
     */
    ExposedWeekPasswordMachineCount: number;
    /**
     * 暴露在互联网上可被黑客利用的低危漏洞总数量。
     * @example `0`
     */
    ExposedNntfVulCount: number;
    /**
     * 暴露在互联网上的网关资产（负载均衡、NAT网关）总数量。
     * @example `3`
     */
    GatewayAssetCount: number;
    /**
     * 暴露在互联网上的IP地址总数量。
     * @example `100`
     */
    ExposedIpCount: number;
    /**
     * 暴露在互联网上可被黑客利用的高危漏洞总数量。
     * @example `1`
     */
    ExposedAsapVulCount: number;
}
