interface AssociateEipAddressRequest {
    /**
    * EIP所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 要绑定的实例ID。
    * @example `i-2zebb08phyczxxxxxxxx`
    */ "InstanceId": string;
    /**
    * @example `123`
    */ "OwnerId"?: number;
    /**
    *  EIP的ID。
    * @example `eip-2zeerraiwb7ujxxxxxxxx`
    */ "AllocationId": string;
    /**
    * 要绑定的云产品实例的类型，取值：**Nat|SlbInstance|EcsInstance|NetworkInterface**。
    * @example `EcsInstance`
    */ "InstanceType"?: string;
    /**
    * 绑定的实例所属地域ID。
    * @example `cn-hangzhou`
    */ "InstanceRegionId"?: string;
    /**
    * 输入交换机网段内的一个IP地址。
    * 如果不输入，系统根据VPC ID和交换机ID自动分配一个私网IP地址。
    * @example `192.xx.xx.4`
    */ "PrivateIpAddress"?: string;
    /**
    * 绑定模式，取值：**NAT|MULTI_BINDED**。
    * @example `NAT`
    */ "Mode"?: string;
}
export { AssociateEipAddressRequest };