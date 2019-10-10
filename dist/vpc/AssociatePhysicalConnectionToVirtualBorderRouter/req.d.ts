interface AssociatePhysicalConnectionToVirtualBorderRouterRequest {
    /**
    * 物理专线实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 边界路由器ID。
    * @example `vbr-bp186tnz6rijyhj******`
    */ "VbrId": string;
    /**
    * 物理专线ID。
    * @example ` pc-bp1qrb3044eqixog****`
    */ "PhysicalConnectionId": string;
    /**
    * VBR的VLAN ID。
    * 取值范围为：1-2999。
    * > 只有物理专线的所有者可以指定该参数，同一条物理专线下的两个VBR的VLAN ID不能相同。
    * @example `123`
    */ "VlanId": string;
    /**
    * 运营商为物理专线提供的电路编码。
    * > 只有物理专线的所有者可以指定该参数。
    * @example `longtel001`
    */ "CircuitCode"?: string;
    /**
    * VBR的阿里云侧互联IP。
    * @example `10.10.0.1`
    */ "LocalGatewayIp"?: string;
    /**
    * VBR专线侧接口对端的IP地址。
    * 该属性只允许VBR owner指定/修改，不允许把Enabled状态的VBR的该属性改为空。
    * @example `10.10.10.9`
    */ "PeerGatewayIp"?: string;
    /**
    * VBR的阿里云侧和客户侧互联IP的子网掩码。
    * 两个IP地址必须位于同一个子网中。
    * @example `255.255.255.0`
    */ "PeeringSubnetMask"?: string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `02fb3da4-130e-11e9-8e44-00xxxxxxxx`
    */ "ClientToken"?: string;
}
export { AssociatePhysicalConnectionToVirtualBorderRouterRequest };