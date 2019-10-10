interface DescribeEventRuleListRequest {
    "RegionId"?: string;
    /**
    * 报警规则名前缀，支持模糊搜索。
    * @example `test`
    */ "NamePrefix"?: string;
    /**
    * 当前页码，默认1。
    * @example `1`
    */ "PageNumber"?: string;
    /**
    * 每页显示记录条数。
    * @example `10`
    */ "PageSize"?: string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId"?: string;
}
export { DescribeEventRuleListRequest };