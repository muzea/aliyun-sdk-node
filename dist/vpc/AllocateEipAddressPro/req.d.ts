export interface AllocateEipAddressProRequest {
    /**
     * 要指定申请的EIP所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要指定申请的EIP的IP地址。
     * **IpAddress**和**InstanceId**参数仅需传入一个，如果都不传，系统会随机申请EIP。
     * @example `192.0.XX.XX`
     */
    "IpAddress"?: string;
    /**
     * 要指定申请的EIP的实例ID。
     * **IpAddress**和**InstanceId**参数仅需传入一个，如果都不传，系统会随机申请EIP。
     * @example `eip-25877c70gddh****`
     */
    "InstanceId"?: string;
    /**
     * 要指定申请的EIP的带宽峰值，单位：Mbps。
     * - 当**InstanceChargeType**取值为**PostPaid**，且**InternetChargeType**取值为**PayByBandwidth**时，**Bandwidth**取值范围为**1**~**500**。
     * - 当**InstanceChargeType**取值为**PostPaid**，且**InternetChargeType**取值为**PayByTraffic**时，**Bandwidth**取值范围为**1**~**200**。
     * - 当**InstanceChargeType**取值为**PrePaid**时，**Bandwidth**取值范围为**1**~**1000**。
     * 默认值：**5**Mbps。
     * @example `5`
     */
    "Bandwidth"?: string;
    /**
     * 购买时长。
     * - 当**PricingCycle**取值**Month**时，**Period**取值范围为**1~9**。
     * - 当**PricingCycle**取值**Year**时，**Period**取值范围为**1~3**。
     * 如果**InstanceChargeType**参数的值为**PrePaid**时，该参数必选。
     * 如果**InstanceChargeType**参数的值为**PostPaid**时，该参数不填。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 线路类型。取值：
     * - **BGP**（默认值）：BGP（多线）线路。目前全部地域都支持BGP（多线）线路EIP。
     * - **BGP_PRO**：BGP（多线）\_精品线路。目前仅中国香港、新加坡、马来西亚（吉隆坡）、菲律宾（马尼拉）、印度尼西亚（雅加达）和泰国（曼谷）地域支持BGP（多线）\_精品线路EIP。
     * 关于BGP（多线）线路和BGP（多线）_精品线路的更多信息，请参见[EIP线路类型](~~32321~~)。
     * - 如果您是单线带宽的白名单用户，您还可以选择以下类型：
     *     -  **ChinaTelecom**：中国电信
     *     - **ChinaUnicom**：中国联通
     *     - **ChinaMobile**：中国移动
     *     - **ChinaTelecom_L2**：中国电信L2
     *     - **ChinaUnicom_L2**：中国联通L2
     *     - **ChinaMobile_L2**：中国移动L2
     * - 如果您是杭州金融云用户，该字段必填，取值：**BGP_FinanceCloud**。
     * @example `BGP`
     */
    "ISP"?: string;
    /**
     * 网络类型，仅取值为**public**（默认值），表示公网。
     * @example `public`
     */
    "Netmode"?: string;
    /**
     * 是否自动付费，取值：
     * - **false**：不开启自动付费，生成订单后需要到订单中心完成支付。
     * - **true**：开启自动付费，自动支付订单。
     * 当**InstanceChargeType**参数的值为**PrePaid**时，该参数必选；当**InstanceChargeType**参数的值为**PostPaid**时，该参数可不填。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 包年包月的计费周期，取值：
     * - **Month**（默认值）：按月付费。
     * - **Year**：按年付费。
     * 当**InstanceChargeType**参数的值为**PrePaid**时，该参数必选；当**InstanceChargeType**参数的值为**PostPaid**时，该参数可不填。
     * @example `Month`
     */
    "PricingCycle"?: string;
    /**
     * 要指定申请的EIP的计费方式，取值：
     *
     * - **PrePaid**：包年包月。
     * - **PostPaid**（默认值）：按量计费。
     * 当**InstanceChargeType**取值为**PrePaid**时，**InternetChargeType**必须取值**PayByBandwidth**。
     * 当**InstanceChargeType**取值为**PostPaid**时，**InternetChargeType**可取值**PayByBandwidth**或**PayByTraffic**。
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 要指定申请的EIP的计量方式，取值：
     * - **PayByBandwidth**（默认值）：按带宽计费。
     * - **PayByTraffic**：按流量计费。
     * 当**InstanceChargeType**取值为**PrePaid**时，**InternetChargeType**必须取值**PayByBandwidth**。
     * 当**InstanceChargeType**取值为**PostPaid**时，**InternetChargeType**可取值**PayByBandwidth**或**PayByTraffic**。
     * @example `PayByBandwidth`
     */
    "InternetChargeType"?: string;
    /**
     * 要指定申请的EIP所属的资源组ID。
     * @example `rg-resourcegroup****`
     */
    "ResourceGroupId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe6****`
     */
    "ClientToken"?: string;
    /**
     * 安全防护级别。
     * - 配置为空时，默认为DDoS防护（基础版）。
     * - 配置为**AntiDDoS_Enhanced**时，表示DDoS防护（增强版）。
     * 您最多可以为10个EIP设置安全防护级别。
     */
    "SecurityProtectionTypes"?: string[];
    /**
     * IP地址池ID。
     * EIP将从该IP地址池中分配。
     * IP地址池功能默认不开放。如需使用，请在配额中心申请IP地址池功能权益配额。具体操作，请参见[通过配额中心提升配额](~~108213~~)。
     * @example `pippool-2vc0kxcedhquybdsz****`
     */
    "PublicIpAddressPoolId"?: string;
}
