interface DescribeDomainRealTimeHttpCodeDataRequest {
    "RegionId"?: string;
    /**
    * 需要查询的加速域名，支持批量，多个域名用逗号（,）分隔。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 获取数据起始时间点。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 不写默认读取过去1小时数据。
    * @example `2015-11-30T05:39:00Z`
    */ "StartTime"?: string;
    /**
    * 获取数据结束时间点。
    * - 结束时间需大于起始时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2015-11-30T05:40:00Z`
    */ "EndTime"?: string;
    /**
    * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有运营商。
    * @example `beijing`
    */ "IspNameEn"?: string;
    /**
    * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有区域。
    * @example `unicom`
    */ "LocationNameEn"?: string;
}
export { DescribeDomainRealTimeHttpCodeDataRequest };