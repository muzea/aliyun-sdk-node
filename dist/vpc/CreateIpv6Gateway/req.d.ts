interface CreateIpv6GatewayRequest {
    /**
    * IPv6网关的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * 要开通IPv6网关的VPC ID。
    * @example `vpc-123456xxxxxxxx`
    */ "VpcId": string;
    /**
    * IPv6网关的规格。取值：
    * - **Small**（默认值）：免费版
    * - **Medium**：企业版
    * - **Large**：企业增强版
    * 不同规格的IPv6网关的转发能力都不同。详细信息，请参见[IPv6网关规格](~~98926~~)。
    * @example `Small`
    */ "Spec"?: string;
    /**
    * IPv6网关的名称。
    * 长度为2-128个字符，必须以字母或中文开头，可包含数字、点号(.)、下划线(_)和短橫线(-)，但不能以`http://`或`https://`开头。
    * @example `ipv6GW`
    */ "Name"?: string;
    /**
    * IPv6网关的描述信息。
    * 长度为2-256个字符，必须以字母或中文开头，可包含数字、点号(.)、下划线(_)和短橫线(-)，但不能以`http://`或`https://`开头。
    * @example `ipv6gatewayforVPC1`
    */ "Description"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `123456`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { CreateIpv6GatewayRequest };