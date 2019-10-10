interface LeaveSecurityGroupRequest {
    "RegionId"?: string;
    /**
    * 安全组ID。
    * @example `sg-securitygroupid1`
    */ "SecurityGroupId": string;
    /**
    * 实例ID。
    * @example `i-instanceid1`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { LeaveSecurityGroupRequest };