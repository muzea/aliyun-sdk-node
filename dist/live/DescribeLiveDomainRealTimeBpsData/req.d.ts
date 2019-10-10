interface DescribeLiveDomainRealTimeBpsDataRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 域名。
    * @example `test.com,abc.com`
    */ "DomainName": string;
    /**
    * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
    * @example `alibaba`
    */ "IspNameEn"?: string;
    /**
    * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
    * @example `tianjin`
    */ "LocationNameEn"?: string;
    /**
    * 起始时间。
    * 日期格式按照ISO8601表示法，并使用UTC时间。 例如：**2016-10-20T04:00:00Z**。
    * @example `2015-11-30T05:39:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间。
    *
    * - 日期格式按照ISO8601表示法，并使用UTC时间。 例如：**2016-10-20T04:00:00Z**。
    * - 不填默认查询从StartTime起一小时内的数据。
    *
    * @example `2015-11-30T05:40:00Z`
    */ "EndTime"?: string;
}
export { DescribeLiveDomainRealTimeBpsDataRequest };