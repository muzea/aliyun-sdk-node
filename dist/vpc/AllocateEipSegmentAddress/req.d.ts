export interface AllocateEipSegmentAddressRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * EIP的带宽峰值。单位：Mbps。
     * - 当**InternetChargeType**取值为**PayByBandwidth**时，**Bandwidth**取值范围为**1**~**500**。
     * - 当**InternetChargeType**取值为**PayByTraffic**时，**Bandwidth**取值范围为**1**~**200**。
     * 默认值为**5** Mbps。
     * @example `5`
     */
    "Bandwidth"?: string;
    /**
     * 连续EIP所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 连续EIP的掩码，取值：
     * - **28**：单次调用，系统将分配16个连续EIP。
     * - **27**：单次调用，系统将分配32个连续EIP。
     * - **26**：单次调用，系统将分配64个连续EIP。
     * - **25**：单次调用，系统将分配128个连续EIP。
     * - **24**：单次调用，系统将分配256个连续EIP。
     * >由于IP地址保留，实际申请到的连续EIP可能缺少1、3或者4个EIP。
     * @example `28`
     */
    "EipMask": string;
    /**
     * 网络类型，仅取值：**public**，表示公网。
     * @example `public`
     */
    "Netmode"?: string;
    /**
     * 连续EIP的计费方式，取值：
     * - **PayByBandwidth**（默认值）：按固定带宽计费。
     * - **PayByTraffic**：按使用流量计费。
     * @example `PayByBandwidth`
     */
    "InternetChargeType"?: string;
    /**
     * 资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 线路类型。取值：
     * - **BGP**（默认值）：BGP（多线）线路。目前全部地域都支持BGP（多线）线路EIP。
     * - **BGP_PRO**：BGP（多线）\_精品线路。目前仅中国香港、新加坡、日本（东京）、马来西亚（吉隆坡）、菲律宾（马尼拉）、印度尼西亚（雅加达）和泰国（曼谷）地域支持BGP（多线）\_精品线路EIP。
     * 关于BGP（多线）线路和BGP（多线）_精品线路的更多信息，请参见[EIP线路类型](~~32321~~)。
     * 如果您是单线带宽的白名单用户，您还可以选择以下类型：
     * -  **ChinaTelecom**：中国电信
     * - **ChinaUnicom**：中国联通
     * - **ChinaMobile**：中国移动
     * - **ChinaTelecom_L2**：中国电信L2
     * - **ChinaUnicom_L2**：中国联通L2
     * - **ChinaMobile_L2**：中国移动L2
     * 如果您是杭州金融云用户，该字段必填，取值：**BGP_FinanceCloud**。
     * @example `BGP`
     */
    "Isp"?: string;
    /**
     * 连续EIP组的可用区。
     * @example `cn-hangzhou-a`
     */
    "Zone"?: string;
}
