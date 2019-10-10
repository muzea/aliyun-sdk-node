interface AllocateEipAddressRequest {
    /**
    * 弹性公网IP所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * EIP的带宽峰值，单位为Mbps，默认值为**5**。
    * @example `5`
    */ "Bandwidth"?: string;
    /**
    * 购买时长。
    * 当**PricingCycle**取值**Month**时，**Period**取值范围为**1~9**。
    * 当**PricingCycle**取值**Year**时，**Period**取值范围为**1~3**。
    * 如果**InstanceChargeType**参数的值为**PrePaid**时，该参数必选。
    * @example `1`
    */ "Period"?: number;
    /**
    * 线路类型，默认值为**BGP**。
    * - 对于已开通单线带宽白名单的用户，ISP字段可以设置为**ChinaTelecom**、**ChinaUnicom**和**ChinaMobile**，用来开通中国电信、中国联通、中国移动的单线EIP。
    * - 如果是杭州金融云用户，该字段必填，取值：**BGP_FinanceCloud**。
    * @example `BGP`
    */ "ISP"?: string;
    "ActivityId"?: number;
    /**
    * 网络类型，默认值为**public**。
    * @example `public`
    */ "Netmode"?: string;
    /**
    * 是否自动付费，取值：
    * **false**：不开启自动付费，生成订单后需要到订单中心完成支付。
    * **true**：开启自动付费，自动支付订单。
    * 当**InstanceChargeType**参数的值为**PrePaid**时，该参数必选；当**InstanceChargeType**参数的值为**PostPaid**时，该参数可不填。
    * @example `false`
    */ "AutoPay"?: boolean;
    /**
    * 包年包月的计费周期，取值：
    * **Month**（默认值）：按月付费。
    * **Year**：按年付费。
    * 当**InstanceChargeType**参数的值为**PrePaid**时，该参数必选；当**InstanceChargeType**参数的值为**PostPaid**时，该参数可不填。
    * @example `Month`
    */ "PricingCycle"?: string;
    /**
    * EIP的计费方式，取值：
    * **PrePaid**：包年包月。
    * **PostPaid**（默认值）：按量计费。
    * 当**InstanceChargeType**取值为**PrePaid**时，**InternetChargeType**必须取值**PayByBandwidth**；当**InstanceChargeType**取值为**PostPaid**时，**InternetChargeType**可取值**PayByBandwidth**或**PayByTraffic**。
    * 包年包月和按量计费的详细信息，请参见[包年包月](~~27767~~)和[按量计费](~~72142~~)。
    * @example `PostPaid`
    */ "InstanceChargeType"?: string;
    /**
    * EIP的计量方式，取值：
    * **PayByBandwidth**（默认值）：按带宽计费。
    * **PayByTraffic**：按流量计费。
    * 当**InstanceChargeType**取值为**PrePaid**时，**InternetChargeType**必须取值**PayByBandwidth**。详细信息，请参见[包年包月](~~27767~~)。
    * 当**InstanceChargeType**取值为**PostPaid**时，**InternetChargeType**可取值**PayByBandwidth**或**PayByTraffic**。详细信息，请参见[按使用流量](~~72142~~)和[按固定带宽](~~72142~~)。
    * @example `PayByTraffic`
    */ "InternetChargeType"?: string;
    /**
    * 企业资源组ID。
    * @example `rg-acfmxazffggds****`
    */ "ResourceGroupId"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `02fb3da4-130e-11e9-8e44-001****`
    */ "ClientToken"?: string;
}
export { AllocateEipAddressRequest };