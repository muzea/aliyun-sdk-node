export interface GetBasicIpSetResponse {
    /**
     * 请求ID。
     * @example `6D2BFF54-6AF2-4679-88C4-2F2E187F16CB`
     */
    RequestId: string;
    /**
     * 基础型全球加速实例的加速地域ID。
     * @example `cn-hangzhou`
     */
    AccelerateRegionId: string;
    /**
     * 基础型全球加速实例的加速地域带宽。单位：Mbps。
     * @example `2`
     */
    Bandwidth: number;
    /**
     * 基础型全球加速实例的加速地域实例ID。
     * @example `ips-bp11ilwqjdkjeg9r7****`
     */
    IpSetId: string;
    /**
     * 加速IP。
     * @example `118.31.XX.XX`
     */
    IpAddress: string;
    /**
     * 基础型全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    AcceleratorId: string;
    /**
     * 加速IP地址协议版本。取值：**IPv4**。
     * @example `IPv4`
     */
    IpVersion: string;
    /**
     * 基础型全球加速实例的加速地域状态。取值：
     * - **init**：初始化。
     * - **active**：运行中。
     * - **updating**：配置中。
     * - **deleting**：删除中。
     * @example `active`
     */
    State: string;
    /**
     * 加速地域公网线路类型。取值：
     * - **BGP**（默认值）：BGP（多线）线路
     * - **BGP_PRO**：BGP（多线）\_精品线路
     * 如果您是单线带宽的白名单用户，您还可能返回以下类型：
     * - **ChinaTelecom**：中国电信（单线）
     * - **ChinaUnicom**：中国联通（单线）
     * - **ChinaMobile**：中国移动（单线）
     * - **ChinaTelecom_L2**：中国电信（单线）_L2
     * - **ChinaUnicom_L2**：中国联通（单线）_L2
     * - **ChinaMobile_L2**：中国移动（单线）_L2
     * @example `BGP`
     */
    IspType: string;
}
