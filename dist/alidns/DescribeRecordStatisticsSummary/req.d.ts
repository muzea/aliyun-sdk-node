interface DescribeRecordStatisticsSummaryRequest {
    "RegionId"?: string;
    /**
    * 查询的开始时间，格式：**YYYY-MM-DD**。
    * 只能查询最近90天的记录，即：StartDate >= Now - 90。
    * @example `2019-07-04`
    */ "StartDate": string;
    /**
    * 域名名称。
    * @example `dns-example.com`
    */ "DomainName": string;
    /**
    * 当前页数，起始值为**1**，默认为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    "UserClientIp"?: string;
    /**
    * 分页查询时设置的每页行数，最大值**100**，最小值为**1**，默认值为**20**。
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 查询的结束时间。格式：**YYYY-MM-DD**。
    * 默认为查询当天的时间。
    * @example `2019-07-04`
    */ "EndDate"?: string;
    "OrderBy"?: string;
    "Direction"?: string;
    /**
    * 关键词的搜索模式。取值：
    * - 模糊搜索（默认）：**LIKE**
    * - 精确搜索：**EXACT**
    * @example `EXACT`
    */ "SearchMode"?: string;
    /**
    * 关键词，按照“%KeyWord%”模式搜索，不区分大小写。
    * @example `test`
    */ "Keyword"?: string;
    /**
    * 查询总量阈值，也可查询相应的请求量不大于threshold的数据。例如，可查询出请求量小于100次的域名。
    * @example `12`
    */ "Threshold"?: number;
}
export { DescribeRecordStatisticsSummaryRequest };