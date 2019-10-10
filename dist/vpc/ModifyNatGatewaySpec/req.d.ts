interface ModifyNatGatewaySpecRequest {
    /**
    * NAT网关的所属地域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 要修改规格的NAT网关的ID。
    * @example `ngw-bp1uewa15k4iy5770ya89`
    */ "NatGatewayId": string;
    /**
    * NAT网关的规格。取值：
    * - Small(默认值)：小型
    * - Middle：中型
    * - Large：大型
    * @example `Small`
    */ "Spec": string;
    "OwnerId"?: number;
    "AutoPay"?: boolean;
    /**
    * 用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不能超过64个ASCII字符。
    * 更多信息，参考[如何保证幂等性](~~36569~~)。
    * @example `SHA234js121223xxxxx`
    */ "ClientToken"?: string;
}
export { ModifyNatGatewaySpecRequest };