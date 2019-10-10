interface ModifyIPv6TranslatorBandwidthRequest {
    /**
    *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  IPv6转换服务的实例ID。
    * @example `ipv6trans-bp1858ysxxxxxx`
    */ "Ipv6TranslatorId": string;
    /**
    *  IPv6转换服务实例的带宽峰值（Mbps），取值： 1-200。
    * @example `2`
    */ "Bandwidth": number;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `sha1111`
    */ "ClientToken"?: string;
    /**
    * 是否自动支付预付费实例的账单，取值：
    * - **true**：是
    * - **false**（默认）：否
    * @example `false`
    */ "AutoPay"?: boolean;
}
export { ModifyIPv6TranslatorBandwidthRequest };