interface DescribeDomainRealTimeQpsDataRequest {
    "RegionId"?: string;
    /**
    * 加速域名。
    * @example `test.test.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有运营商。
    * @example `telecom`
    */ "IspNameEn"?: string;
    /**
    * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有区域。
    * @example `beijing`
    */ "LocationNameEn"?: string;
    /**
    * 起始时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 不填默认查询从EndTime起一小时内的数据。
    * @example `2016-10-20T04:00:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 不填默认查询从StartTime起一小时内的数据。
    * @example `2016-10-20T04:00:00Z`
    */ "EndTime"?: string;
}
export { DescribeDomainRealTimeQpsDataRequest };