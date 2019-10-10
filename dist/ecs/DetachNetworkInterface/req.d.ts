interface DetachNetworkInterfaceRequest {
    /**
    * 资源所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 弹性网卡ID。
    * @example `eni-myeni`
    */ "NetworkInterfaceId": string;
    /**
    * 实例ID。
    * @example `i-myinstance`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { DetachNetworkInterfaceRequest };