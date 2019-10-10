interface DescribeLiveDomainRealTimeHttpCodeDataRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 需要查询的加速域名。
    * > 支持批量查询，多个域名用逗号（半角）分隔。
    * @example `test.com,abc.com`
    */ "DomainName": string;
    /**
    * 获取数据起始时间点。日期格式按照ISO8601表示法，并使用UTC时间。 格式为：`YYYY-MM-DDThh:mm:ssZ`。
    * > 若参数为空，默认读取过去**1**小时数据。
    * @example `2015-11-30T05:39:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间需大于起始时间。日期格式按照ISO8601表示法，并使用UTC时间。 格式为：`YYYY-MM-DDThh:mm:ssZ `。
    *
    * @example `2015-11-30T05:40:00Z`
    */ "EndTime"?: string;
    /**
    * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
    * @example `alibaba`
    */ "IspNameEn"?: string;
    /**
    * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
    * @example `tianjin`
    */ "LocationNameEn"?: string;
}
export { DescribeLiveDomainRealTimeHttpCodeDataRequest };