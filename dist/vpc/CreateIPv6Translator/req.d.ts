interface CreateIPv6TranslatorRequest {
    /**
    *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
    * @example `cm-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 客户端token用于保证请求的幂等性。要保证Client Token在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `sha111`
    */ "ClientToken"?: string;
    /**
    *  IPv6转换服务实例的名称，默认为实例ID。  长度为 2-100个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以http:// 或https://开头。
    * @example `ipv6_1`
    */ "Name"?: string;
    /**
    *  IPv6转换服务实例的规格。取值： **small **。
    * @example `small`
    */ "Spec"?: string;
    /**
    *  IPv6转换服务实例的付费类型。取值：
    * - **PREPAY**：预付费
    * -  **POSTPAY**：后付费
    * @example `PREPAY`
    */ "PayType"?: string;
    /**
    *  预付费的计费周期，取值：
    * - **Month**：按月购买（默认值）
    * - **Year**：按年购买
    * @example `Month`
    */ "PricingCycle"?: string;
    /**
    * 购买时长，取值：
    * - 如果计费时长为**Month**，则取值为1-9。
    * - 如果计费时长为**Year**，则取值为3。
    * @example `1`
    */ "Duration"?: number;
    /**
    * 是否自动只支付预付费账单。取值：**true|false**。
    * @example `false`
    */ "AutoPay"?: boolean;
    /**
    * IPv6转换服务实例的计费带宽（Mbps）。取值：**1-200**。若不设置转换映射条目的带宽，实例中的IPv6转换服务映射条目共享该带宽。
    * > 若不指定带宽，默认为10Mbps。
    * @example `10`
    */ "Bandwidth"?: number;
}
export { CreateIPv6TranslatorRequest };