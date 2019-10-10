interface UnassociatePhysicalConnectionFromVirtualBorderRouterRequest {
    /**
    * 物理专线实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * VBR的VLAN ID，取值范围为：1-2999。
    * > 只有物理专线的所有者可以指定该参数，同一条物理专线下的两个VBR的VLAN ID不能相同。
    * @example `vbr-bp16ksp61j7e0tkn*****`
    */ "VbrId": string;
    /**
    * 物理专线ID。
    * @example `pc-bp1qrb3044eqixog****`
    */ "PhysicalConnectionId": string;
    "OwnerId"?: number;
    /**
    * 运营商为物理专线提供的电路编码。
    * > 只有物理专线的所有者可以指定该参数。
    * @example `longtel001`
    */ "ClientToken"?: string;
}
export { UnassociatePhysicalConnectionFromVirtualBorderRouterRequest };