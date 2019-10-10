interface DescribeDomainListRequest {
    "RegionId"?: string;
    /**
    * 指定访问源IP地址。
    * @example `127.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 指定的域名模糊匹配搜索信息。
    * @example `sas`
    */ "FuzzyDomain"?: string;
    /**
    * 指定待查询的域名类型。
    * @example `root`
    */ "DomainType"?: string;
    /**
    * 指定列表每页显示数据条数。
    * @example `1`
    */ "PageSize"?: number;
    /**
    * 指定返回结果的当前页码。
    * @example `1`
    */ "CurrentPage"?: number;
}
export { DescribeDomainListRequest };