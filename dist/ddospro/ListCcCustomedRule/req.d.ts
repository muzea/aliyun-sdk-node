interface ListCcCustomedRuleRequest {
    "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * 要查询的域名。
    * @example `ww.aliyun.com`
    */ "Domain"?: string;
    /**
    * 分页大小，最大值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 分页页号，最小值为**1**。
    * @example `1`
    */ "CurrentPage"?: number;
}
export { ListCcCustomedRuleRequest };