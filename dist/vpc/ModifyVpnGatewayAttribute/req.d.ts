interface ModifyVpnGatewayAttributeRequest {
    /**
    * VPN网关实例所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    *  VPN网关实例的ID。
    * @example `vpn-bp1q8bgx4xnkm2ogj****`
    */ "VpnGatewayId": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
    /**
    * VPN网关的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
    * @example `myvpn`
    */ "Name"?: string;
    /**
    * VPN网关的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `vpn网关`
    */ "Description"?: string;
}
export { ModifyVpnGatewayAttributeRequest };