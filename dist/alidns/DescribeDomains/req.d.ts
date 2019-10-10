interface DescribeDomainsRequest {
    "RegionId"?: string;
    /**
    * 用户语言。
    * @example `en`
    */ "Lang"?: string;
    "UserClientIp"?: string;
    /**
    * 关键字，按照“%KeyWord%”模式搜索，不区分大小写。
    * @example `com`
    */ "KeyWord"?: string;
    /**
    * 域名分组ID，如果不填写则默认为全部分组。
    * @example `2223`
    */ "GroupId"?: string;
    /**
    * 当前页数，起始值为**1**，默认为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 搜索模式。取值：
    * - **LIKE**：模糊搜索
    * - **EXACT**：精确搜索
    * @example `LIKE`
    */ "SearchMode"?: string;
    /**
    * 资源组ID。
    * @example `rg-resourcegroupid01`
    */ "ResourceGroupId"?: string;
}
export { DescribeDomainsRequest };