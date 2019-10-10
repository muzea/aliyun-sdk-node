interface AllocatePublicIpAddressRequest {
    "RegionId"?: string;
    /**
    * 需要分配IP地址的实例ID。
    * @example `i-instance1`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 实例的公网IP地址。
    * @example `10.1.***.159`
    */ "IpAddress"?: string;
    /**
    * VLAN ID。
    * @example `100`
    */ "VlanId"?: string;
}
export { AllocatePublicIpAddressRequest };