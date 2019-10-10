interface DescribeZonesRequest {
    "RegionId"?: string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 当前页数，起始值为**1**，默认为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
    * @example `100`
    */ "PageSize"?: number;
    /**
    * 关键字，按照“%KeyWord%”模式搜索，不区分大小写。
    * @example `test`
    */ "Keyword"?: string;
    "UserClientIp"?: string;
    /**
    * 搜索模式。取值：
    * - **LIKE**：模糊搜索
    * - **EXACT**：精确搜索，默认不填为精确搜索
    * @example `LIKE`
    */ "SearchMode"?: string;
    /**
    * 所属地域ID。
    * @example `cn-hangzhou`
    */ "QueryRegionId"?: string;
    /**
    * VPC ID。
    * @example `vpc-xxxxx`
    */ "QueryVpcId"?: string;
    /**
    * 资源组ID。
    * @example `rg-xxxxx`
    */ "ResourceGroupId"?: string;
}
export { DescribeZonesRequest };