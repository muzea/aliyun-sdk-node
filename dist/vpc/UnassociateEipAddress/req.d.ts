interface UnassociateEipAddressRequest {
    /**
    * 弹性公网IP的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    *  要解绑的云产品的实例ID。
    * @example `i-12345678`
    */ "InstanceId": string;
    "OwnerId"?: number;
    "Force"?: boolean;
    /**
    *  EIP的ID。
    * @example `eip-2zeerraiwb7uj6i0d0fo3`
    */ "AllocationId": string;
    /**
    * 要解绑的资源类型，取值：
    * - EcsInstance（默认值）：专有网络的ECS实例
    * - SlbInstance：专有网络的SLB实例
    * - Nat：NAT网关
    * - HaVip：HAVIP
    * @example `EcsInstance`
    */ "InstanceType"?: string;
    "PrivateIpAddress"?: string;
}
export { UnassociateEipAddressRequest };