interface DescribeDomainGroupsRequest {
    "RegionId"?: string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    "UserClientIp"?: string;
    /**
    * 组名关键字，按照“%KeyWord%”模式搜索，不区分大小写。
    * @example `Group`
    */ "KeyWord"?: string;
    /**
    * 当前页数，起始值为**1**，默认为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
    * @example `20`
    */ "PageSize"?: number;
}
export { DescribeDomainGroupsRequest };