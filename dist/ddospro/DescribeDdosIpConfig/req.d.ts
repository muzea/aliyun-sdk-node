interface DescribeDdosIpConfigRequest {
    "RegionId"?: string;
    /**
    * 查询索引，从**0**开始。
    * @example `0`
    */ "Index": number;
    /**
    * 分页大小，最大值为**10**。
    * @example `10`
    */ "PageSize": number;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    "Ips"?: string[];
}
export { DescribeDdosIpConfigRequest };