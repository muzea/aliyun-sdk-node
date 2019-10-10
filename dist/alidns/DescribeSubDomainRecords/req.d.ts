interface DescribeSubDomainRecordsRequest {
    "RegionId"?: string;
    /**
    * 子域名名称。
    * 例如`www.abc.com`，如果输入的是abc.com，则认为是@.abc.com。
    * @example `www.abc.com`
    */ "SubDomain": string;
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
    * 分页查询时设置的每页行数，最大值**500**，默认为**20**。
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 解析记录类型。若不传值，则返回子域名对应的全部解析记录类型。
    * 解析类型包括(不区分大小写)：**A、MX、CNAME、TXT、REDIRECT_URL、FORWORD_URL、NS、AAAA、SRV**。
    * @example `MX`
    */ "Type"?: string;
    /**
    * 解析线路。
    * @example `default`
    */ "Line"?: string;
    /**
    * 域名名称。
    * @example `example.com`
    */ "DomainName"?: string;
}
export { DescribeSubDomainRecordsRequest };