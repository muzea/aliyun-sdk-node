export interface CreateBasicIpSetRequest {
    /**
     * 基础型全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 基础型全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    "AcceleratorId": string;
    /**
     * 要加速的地域ID。
     * 您可以通过调用[ListAvailableBusiRegions](~~261190~~)接口获取指定的全球加速实例可用的加速地域。
     * @example `cn-shanghai`
     */
    "AccelerateRegionId": string;
    /**
     * 加速地域公网线路类型。取值：
     * - **BGP**（默认值）：BGP（多线）线路
     * - **BGP_PRO**：BGP（多线）\_精品线路
     * 如果您是单线带宽的白名单用户，您还可以选择以下类型：
     * - **ChinaTelecom**：中国电信（单线）
     * - **ChinaUnicom**：中国联通（单线）
     * - **ChinaMobile**：中国移动（单线）
     * - **ChinaTelecom_L2**：中国电信（单线）\_L2
     * - **ChinaUnicom_L2**：中国联通（单线）\_L2
     * - **ChinaMobile_L2**：中国移动（单线）\_L2
     * > - 带宽计费方式为**按流量**的基础型全球加速实例需要配置该项。
     * > - 基础型全球加速实例的加速地域为中国香港，且绑定了精品加速带宽类型的基础带宽包时，默认为BGP（多线）\_精品线路。
     * > - 加速地域不同，支持的单线线路类型不同。
     * @example `BGP`
     */
    "IspType"?: string;
    /**
     * 加速地域带宽，单位：**Mbps**。
     * 加速地域支持分配的最小带宽为 2Mbps。
     * @example `2`
     */
    "Bandwidth"?: number;
}
