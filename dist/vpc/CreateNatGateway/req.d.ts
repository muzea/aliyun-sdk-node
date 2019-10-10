interface CreateNatGatewayRequest {
    /**
    * NAT网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * VPC的ID。
    * @example ` vpc-bp1di7uewzmtvfuq8ufpv`
    */ "VpcId": string;
    "OwnerId"?: number;
    /**
    * NAT网关的名称。
    * 名称在\[2,128]个字符之间，必须以英文字母或中文开头，不能以` http:// `和 `https:// `开头，可包含数字，“.”，“_”或“-”。
    * 如果没有指定该参数，默认使用网关ID。
    * @example `fortest`
    */ "Name"?: string;
    /**
    * NAT网关的描述。
    * 描述在2-256个字符之间，不能以` http://` 和 `https:// `开头。
    * @example `testnat`
    */ "Description"?: string;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
    * @example `shefffxxddjehfh123`
    */ "ClientToken"?: string;
    /**
    * NAT网关的规格。取值：
    * - Small(默认值)：小型
    * - Middle：中型
    * - Large：大型
    * - XLarge.1：超大型
    * @example `small`
    */ "Spec"?: string;
    "BandwidthPackage"?: string[];
    "InstanceChargeType"?: string;
    "PricingCycle"?: string;
    "Duration"?: string;
    "AutoPay"?: boolean;
}
export { CreateNatGatewayRequest };