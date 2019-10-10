interface DescribeSecurityGroupAttributeRequest {
    /**
    * 安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 安全组ID。
    * @example `sg-securitygroupid1`
    */ "SecurityGroupId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 网卡类型。取值范围：
    *
    * - internet：公网
    * - intranet：内网
    * 默认值：internet
    * @example `intranet`
    */ "NicType"?: string;
    /**
    * 安全组规则授权方向。取值范围：
    *
    * - egress：安全组出方向
    * - ingress：安全组入方向
    * - all：不区分方向
    * 默认值：all
    * @example `all`
    */ "Direction"?: string;
}
export { DescribeSecurityGroupAttributeRequest };