interface DescribeDomainTopReferVisitRequest {
    "RegionId"?: string;
    /**
    * 如果不填该参数，默认返回所有加速域名合并后数据。
    * 可以输入需要查询的加速域名 ，多个域名用逗号(,)分隔。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 获取数据起始时间，不写默认读取过去24小时数据。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 最小数据粒度为5分钟。
    * @example `2017-12-21T08:00:00:00Z`
    */ "StartTime"?: string;
    /**
    * 排序方式。支持**traf**和**pv**，默认值：**pv**。
    * @example `pv`
    */ "SortBy"?: string;
    /**
    * 百分比。
    * @example `0.5`
    */ "Percent"?: string;
}
export { DescribeDomainTopReferVisitRequest };