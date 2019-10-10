interface DescribeClassicLinkInstancesRequest {
    /**
    * 实例所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * VPC ID。目标 VPC 必须已 [开启 ClassicLink 功能](~~65413~~)。
    * @example `vpc-test`
    */ "VpcId"?: string;
    /**
    * 实例 ID。最多指定 100 台实例 ID，并使用半角逗号（,）隔开。
    * @example `i-test`
    */ "InstanceId"?: string;
    /**
    * 当前页码。起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: string;
    /**
    * 分页查询时设置的每页行数。取值范围：1~100
    * 默认值：10
    * @example `10`
    */ "PageSize"?: string;
}
export { DescribeClassicLinkInstancesRequest };