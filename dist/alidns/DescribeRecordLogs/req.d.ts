interface DescribeRecordLogsRequest {
    "RegionId"?: string;
    /**
    * 域名名称。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户端IP。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
    /**
    * 当前页数，起始值为**1**，默认为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 关键字，按照“%KeyWord%”模式搜索，不区分大小写。
    * @example `test`
    */ "KeyWord"?: string;
    /**
    * 查询的开始时间，格式：**YYYY-MM-DD**。
    * @example `2015-12-12T09:23Z`
    */ "StartDate"?: string;
    /**
    * 查询的结束时间，格式：**YYYY-MM-DD**。
    * @example `2015-12-12T09:23Z`
    */ "endDate"?: string;
}
export { DescribeRecordLogsRequest };