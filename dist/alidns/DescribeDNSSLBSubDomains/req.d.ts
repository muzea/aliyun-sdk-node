interface DescribeDNSSLBSubDomainsRequest {
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
    * 用户IP。
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
}
export { DescribeDNSSLBSubDomainsRequest };