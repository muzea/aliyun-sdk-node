interface ModifyInstanceVpcAttributeRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `i-bp1iudwa5b1tqaxxxxxx`
    */ "InstanceId": string;
    /**
    * 新的交换机ID。指定实例的当前交换机和新的交换机（**VSwitchId**）必须要属于同一个地域下的可用区。
    * @example `[vswitchid]`
    */ "VSwitchId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 新的私网IP地址。**PrivateIpAddress**依赖于**VSwitchId**，不能单独指定**PrivateIpAddress**。
    * @example `172.17.XX.XXX`
    */ "PrivateIpAddress"?: string;
}
export { ModifyInstanceVpcAttributeRequest };