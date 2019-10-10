interface CreateVirtualBorderRouterRequest {
    /**
    *  物理专线所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    *  物理专线的ID。
    * @example `pc-xxxxxxxxx`
    */ "PhysicalConnectionId": string;
    /**
    *  VBR的VLAN ID，取值范围为：**[1,2999]**。
    *
    * > 只有物理专线的所有者可以指定该参数，同一条物理专线下的两个VBR的VLAN ID不能相同。
    * @example `10`
    */ "VlanId": number;
    /**
    *  VBR所有者的账号ID。 默认为当前用户的账号ID，即为物理专线的所有者创建VBR。
    * @example `10`
    */ "VbrOwnerId"?: number;
    /**
    * 运营商为物理专线提供的电路编码。
    *
    * > 只有物理专线的所有者可以指定该参数。
    * @example `longtel001`
    */ "CircuitCode"?: string;
    /**
    *  VBR的阿里云侧互联IP。
    * @example `116.62.222.XX`
    */ "LocalGatewayIp"?: string;
    /**
    * VBR专线侧接口对端的IP地址。该属性只允许VBR owner指定/修改。为专线所有者创建VBR时必填，为其他账号创建VBR时不可填。
    * @example `116.62.222.XX`
    */ "PeerGatewayIp"?: string;
    /**
    *   VBR的阿里云侧和客户侧互联IP的子网掩码。 两个IP地址必须位于同一个子网中。
    * @example `255.255.255.252`
    */ "PeeringSubnetMask"?: string;
    /**
    * VBR的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
    * @example `VBR描述信息`
    */ "Description"?: string;
    /**
    * VBR的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
    * @example `test`
    */ "Name"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { CreateVirtualBorderRouterRequest };