interface AttachNetworkInterfaceRequest {
    /**
    * 实例所在地域的 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 弹性网卡 ID。
    * @example `[networkInterfaceId]`
    */ "NetworkInterfaceId": string;
    /**
    * 实例 ID。
    * @example `i-myInstance`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { AttachNetworkInterfaceRequest };