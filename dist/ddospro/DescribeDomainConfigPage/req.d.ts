interface DescribeDomainConfigPageRequest {
    "RegionId"?: string;
    /**
    * 分页大小，最大值为**5**。
    * @example `5`
    */ "PageSize": number;
    /**
    * 分页页号，最小值为**1**。
    * @example `1`
    */ "PageNo": number;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * 要查询的域名。支持模糊查询。
    * @example `www.aliyun.com`
    */ "Domain"?: string;
}
export { DescribeDomainConfigPageRequest };