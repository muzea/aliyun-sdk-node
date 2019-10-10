interface CreateCenBandwidthPackageRequest {
    "RegionId"?: string;
    /**
    * 带宽包的带宽峰值，单位为Mbps，最小值为**2**。
    * @example `2`
    */ "Bandwidth": number;
    /**
    * 网络实例所属的区域，取值：
    * **China | North-America | Asia-Pacific | Europe | Australia**。
    * @example `China `
    */ "GeographicRegionAId": string;
    /**
    * 网络实例所属的区域，取值：
    * **China | North-America | Asia-Pacific | Europe | Australia**。
    * @example `China `
    */ "GeographicRegionBId": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `SSJFLAFHHFHFF-SJSJJFBWHHE-SHHFJJDBD`
    */ "ClientToken"?: string;
    /**
    * 带宽包的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字、点号（.）、下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
    * @example `cen`
    */ "Name"?: string;
    /**
    * 带宽包描述。
    * @example `带宽包`
    */ "Description"?: string;
    /**
    * 带宽包的付费类型，取值：
    * - **POSTPAY**：后付费。
    * - **PREPAY**：预付费。
    * > 国际站仅支持预付费。
    * @example `PREPAY`
    */ "BandwidthPackageChargeType"?: string;
    /**
    * 带宽包的购买时长，默认值为**1**。
    * @example `1`
    */ "Period"?: number;
    /**
    * 带宽包的计费周期，取值：
    * - **Month**（默认值）：按月计费。
    * - **Year**：按年计费。
    * @example `Month`
    */ "PricingCycle"?: string;
    /**
    * 是否自动支付账单，取值：
    * - **true**：自动支付。
    * - **false**（默认值）：不自动支付。
    * @example `true`
    */ "AutoPay"?: boolean;
}
export { CreateCenBandwidthPackageRequest };