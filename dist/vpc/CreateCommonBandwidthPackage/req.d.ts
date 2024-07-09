export interface CreateCommonBandwidthPackageRequest {
    /**
     * 共享带宽所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 共享带宽的可用区。
     * 创建云盒共享带宽时，该参数必填。
     * @example `ap-southeast-1-lzdvn-cb`
     */
    "Zone"?: string;
    /**
     * 线路类型。取值：
     * - **BGP**：BGP（多线）线路。目前全部地域都支持BGP（多线）线路。
     * - **BGP_PRO**：BGP（多线）\_精品线路。目前仅中国香港、新加坡、日本（东京）、菲律宾（马尼拉）、马来西亚（吉隆坡）、印度尼西亚（雅加达）和泰国（曼谷）地域支持BGP（多线）\_精品线路共享带宽。
     * 如果您是单线带宽的白名单用户，您还可以选择以下类型：
     * - **ChinaTelecom**：中国电信
     * - **ChinaUnicom**：中国联通
     * - **ChinaMobile**：中国移动
     * - **ChinaTelecom_L2**：中国电信L2
     * - **ChinaUnicom_L2**：中国联通L2
     * - **ChinaMobile_L2**：中国移动L2
     * 如果您是杭州金融云用户，该字段必填，取值：**BGP_FinanceCloud**。
     * @example `BGP`
     */
    "ISP"?: string;
    /**
     * 共享带宽的名称。
     * 长度为2~128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `test123`
     */
    "Name"?: string;
    /**
     * 共享带宽的描述信息。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `abc`
     */
    "Description"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazdjdhd****`
     */
    "ResourceGroupId"?: string;
    /**
     * 共享带宽的带宽峰值。单位：Mbps。
     * <props="intl"><ph>默认取值范围：**1**~**1000**。默认值：**1**。</ph></props>
     * <props="china">
     * - 当**InternetChargeType**取值为**PayByBandwidth**，即共享带宽的计费方式为按带宽计费时，**Bandwidth**的默认取值范围为**2**~**20000**。
     * - 当**InternetChargeType**取值为**95PayBy95**，即共享带宽的计费方式为按增强型95计费时，**Bandwidth**的默认取值范围为**200**~**20000**。
     * - 当 **InternetChargeType**取值为**PayByDominantTraffic**，即共享带宽的计费方式为按主流量计费时，**Bandwidth**的默认取值范围为**1**~**2000**。
     *  默认值：**1000**。
     * </props>
     * @example `1000`
     */
    "Bandwidth": number;
    /**
     * 共享带宽的保底百分比，仅取值为**20**。
     *  <props="china"><ph>当**InternetChargeType**取值**PayBy95**时需配置此参数。</ph></props>
     * >仅中国站支持该参数。
     * @example `20`
     */
    "Ratio"?: number;
    /**
     * 共享带宽的计费方式，取值：
     * </props><props="intl">**PayByTraffic**（按流量计费）。</props>
     * <props="china">
     * - **PayByBandwidth**（默认值）：按带宽计费。
     * - **PayBy95**：按增强型95计费。
     * -  **PayByDominantTraffic**：按主流量计费。
     * </props>
     * @example `中国站示例值：PayByBandwidth，国际站示例值：PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 安全防护级别。
     * - 配置为空时，默认为DDoS防护（基础版）。
     * - 配置为**AntiDDoS_Enhanced**时，表示DDoS防护（增强版）。
     * <props="china"><ph>当**InternetChargeType**取值**PayBy95**时可以配置此参数。</ph></props>
     * 最大支持添加10个安全防护级别。
     * > 该参数已废弃。
     * @example `AntiDDoS_Enhanced`
     */
    "SecurityProtectionTypes"?: string[];
}
