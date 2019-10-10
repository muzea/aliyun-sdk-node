interface DescribeSecurityGroupsRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `cn-hangzhou`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 安全组所在的专有网络ID。
    * @example `vpc-vpcid1`
    */ "VpcId"?: string;
    /**
    * 安全组列表的页码。起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：50
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 安全组ID列表。一次最多支持100个安全组ID，ID之间用半角逗号（,）隔开，格式为JSON数组。
    * @example `["sg-id1", "sg-id2", "sg-id2",....]`
    */ "SecurityGroupIds"?: string;
    "Tag"?: string[];
    /**
    * 安全组所在的企业资源组ID。
    * @example `rg-resourcegroupid1`
    */ "ResourceGroupId"?: string;
    /**
    * 网络类型。
    * @example `vpc`
    */ "NetworkType"?: string;
    /**
    * 安全组ID。
    * @example `sg-securitygroupid`
    */ "SecurityGroupId"?: string;
    /**
    * 安全组名称。
    * @example `test1`
    */ "SecurityGroupName"?: string;
    /**
    * @example `true`
    */ "IsQueryEcsCount"?: boolean;
    /**
    * @example `true`
    */ "FuzzyQuery"?: boolean;
    /**
    * 是否只预检此次请求。
    *
    * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
    * - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
    * 默认值：false
    * @example `false`
    */ "DryRun"?: boolean;
}
export { DescribeSecurityGroupsRequest };