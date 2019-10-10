interface ModifyVirtualBorderRouterAttributeRequest {
    /**
    * VBR所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    *  边界路由器的ID。
    * @example `vbr-**************`
    */ "VbrId": string;
    /**
    *  VBR的VLAN ID，取值范围为：**1-2999**。
    *
    * > 只有物理专线的所有者可以指定该参数，同一条物理专线下的两个VBR的VLAN ID不能相同。
    * @example `12`
    */ "VlanId"?: number;
    /**
    * 运营商为物理专线提供的电路编码。
    *
    * > 只有物理专线的所有者可以指定该参数。
    *
    * @example `longtel001`
    */ "CircuitCode"?: string;
    /**
    *  VBR的阿里云侧互联IP。
    * @example `116.62.xx.xx`
    */ "LocalGatewayIp"?: string;
    /**
    * VBR专线侧接口对端的IP地址。该属性只允许VBR owner指定/修改。不允许把Enabled状态的VBR的该属性改为空。
    * @example `120.120.xx.xx`
    */ "PeerGatewayIp"?: string;
    /**
    *   VBR的阿里云侧和客户侧互联IP的子网掩码。 两个IP地址必须位于同一个子网中。
    * @example `255.255.128.0`
    */ "PeeringSubnetMask"?: string;
    /**
    * 配置BFD报文的发送间隔，取值：**200-1000，单位为ms**。
    * @example `100`
    */ "MinTxInterval"?: number;
    /**
    * 配置BFD报文的接收间隔，取值：**200-1000，单位为ms**。
    * @example `100`
    */ "MinRxInterval"?: number;
    /**
    * 检测时间倍数。即接收方允许发送方发送报文的最大连接丢包数，用来检测链路是否正常，取值：**3-10**。
    * @example `3`
    */ "DetectMultiplier"?: number;
    /**
    * VBR的描述信息。
    * 长度为2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `VBR`
    */ "Description"?: string;
    /**
    * VBR的名称。
    * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
    * @example `test`
    */ "Name"?: string;
    /**
    * 物理专线ID。
    * @example `pc-kojok19xxxxxxxxx`
    */ "AssociatedPhysicalConnections"?: string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `02fb3da4-130e-11e9-8e44-00xxxxxxxx`
    */ "ClientToken"?: string;
}
export { ModifyVirtualBorderRouterAttributeRequest };