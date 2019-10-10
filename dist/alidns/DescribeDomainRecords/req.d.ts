interface DescribeDomainRecordsRequest {
    "RegionId"?: string;
    /**
    * 域名名称。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    "UserClientIp"?: string;
    /**
    * 当前页数，起始值为**1**，默认为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值**500**，默认为**20**。
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 关键字。
    * @example `test`
    */ "KeyWord"?: string;
    /**
    * 主机记录的关键字，按照“%RRKeyWord%”模式搜索，不区分大小写。
    * @example `www`
    */ "RRKeyWord"?: string;
    /**
    * 解析类型的关键字，按照全匹配搜索，不区分大小写。
    * @example `MX`
    */ "TypeKeyWord"?: string;
    /**
    * 记录值的关键字，按照“%ValueKeyWord%”模式搜索，不区分大小写。
    * @example `com`
    */ "ValueKeyWord"?: string;
    /**
    * 排序方式。按照解析添加的时间从新到旧排序。
    * @example `default`
    */ "OrderBy"?: string;
    /**
    * 域名描述。
    * @example `描述`
    */ "Direction"?: string;
    /**
    * 搜索模式。
    * @example `LIKE`
    */ "SearchMode"?: string;
    /**
    * 域名分组ID。
    * @example `2223`
    */ "GroupId"?: number;
    /**
    * 解析记录类型，参见[解析记录类型格式](https://help.aliyun.com/document_detail/29805.html?spm=a2c4g.11186623.2.20.2cee2846MZb2I3)。
    * @example `A`
    */ "Type"?: string;
    /**
    * 解析线路，默认为**default**。
    * 参见[解析线路枚举](https://help.aliyun.com/document_detail/29807.html?spm=a2c4g.11186623.2.22.2cee2846MZb2I3)。
    * @example `default`
    */ "Line"?: string;
    /**
    * 解析记录状态，取值：**Enable/Disable**。
    * @example `Enable`
    */ "Status"?: string;
}
export { DescribeDomainRecordsRequest };