export interface CreateIpSetsRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `1F4B6A4A-C89E-489E-BAF1-52777EE148EF`
     */
    "ClientToken"?: string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1yeeq8yfoyszmqy****`
     */
    "AcceleratorId": string;
    /**
     * 要加速的地域信息。
     */
    "AccelerateRegion": {
        /**
         * 要加速的地域ID。
         * 可添加地域的数量受带宽总额和全球加速实例规格限制。关于各实例规格支持的接入地域数量，请参见[全球加速实例概述](~~153127~~)。
         * @example `cn-huhehaote`
         */
        AccelerateRegionId: string;
        /**
         * 接入全球加速服务的IP地址协议，取值：
         * - **IPv4**（默认值）：IPv4地址协议。
         * - **IPv6**：IPv6地址协议。
         * - **DUAL_STACK**：IPv4和IPv6地址协议。
         * > - DUAL_STACK类型仅标准型按量计费的全球加速实例支持。
         * @example `IPv6`
         */
        IpVersion: string;
        /**
         * 加速地域分配的带宽，单位为**Mbps**。
         * > - 该参数必填。
         * > - 每个加速地域支持分配的最小带宽为2Mbps。
         * >- 加速地域带宽总额应小于或等于您购买的基础带宽包的带宽。
         * @example `2`
         */
        Bandwidth: number;
        /**
         * 加速地域公网线路类型。取值：
         * - **BGP**：BGP（多线）线路。
         * - **BGP\_PRO**：BGP（多线）_精品线路。
         * > - 带宽计费方式为**按流量**的全球加速实例需要配置该项。
         * > - 加速地域不同，支持的加速地域公网线路类型不同。
         * @example `BGP`
         */
        IspType: string;
    }[];
}
