interface ModifyCustomerGatewayAttributeRequest {
    /**
    * 用户网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 用户网关的ID。
    * @example `vpn-bp1q8bgx4xnkm2ogj****`
    */ "CustomerGatewayId": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
    /**
    * 用户网关的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
    * @example `test`
    */ "Name"?: string;
    /**
    * 用户网关的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
    * @example `test`
    */ "Description"?: string;
}
export { ModifyCustomerGatewayAttributeRequest };