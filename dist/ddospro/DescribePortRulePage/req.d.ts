interface DescribePortRulePageRequest {
    "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * 分页大小，最大值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 要查询的高防实例IP。
    * @example `1.1.1.1`
    */ "Ip"?: string;
    /**
    * 分页页号，最小值为**1**。
    * @example `1`
    */ "CurrentPage"?: number;
}
export { DescribePortRulePageRequest };