interface DescribeZoneRecordsRequest {
    "RegionId"?: string;
    /**
    * Zone ID。
    * @example `CAgICA1OA_58`
    */ "ZoneId": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 主机记录的关键字，按照”%Keyword%”模式搜索，不区分大小写。
    * @example `test`
    */ "Keyword"?: string;
    /**
    * 当前页数，起始值为**1**，默认为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值**500**，默认为**20**。
    * @example `100`
    */ "PageSize"?: number;
    /**
    * 用户Ip。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
    /**
    * 标签。
    * @example `tag`
    */ "Tag"?: string;
    /**
    * 搜索模式。取值：
    * - **LIKE**：模糊搜索
    * - **EXACT**：精确搜索（默认）
    * @example `LIKE`
    */ "SearchMode"?: string;
}
export { DescribeZoneRecordsRequest };