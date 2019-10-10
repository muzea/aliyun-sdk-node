interface DetachClassicLinkVpcRequest {
    /**
    * 实例所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 经典网络类型实例 ID。
    * @example `i-test`
    */ "InstanceId": string;
    /**
    * 实例连接的 VPC ID。
    * @example `vpc-test`
    */ "VpcId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { DetachClassicLinkVpcRequest };