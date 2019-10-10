interface JoinSecurityGroupRequest {
    "RegionId"?: string;
    /**
    * 安全组ID。您可以调用[DescribeSecurityGroups](~~25556~~)查看您可用的安全组。
    * @example `sg-securitygroupid1`
    */ "SecurityGroupId": string;
    /**
    * 实例ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `i-instanceid1`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { JoinSecurityGroupRequest };