interface DescribeDomainRealTimeSrcHttpCodeDataRequest {
    "RegionId"?: string;
    /**
    * 需要查询的加速域名，多个用逗号（,）隔开。
    * 不填该参数，代表查询当前用户下所有域名。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 获取数据起始时间点。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 不写默认读取过去1小时数据。
    * @example `2015-11-30T04:40:00Z`
    */ "StartTime"?: string;
    /**
    * 获取数据的结束时间点。
    * - 结束时间需大于起始时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 格式为：YYYY-MM-DDThh:mm:ssZ。
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
export { DescribeDomainRealTimeSrcHttpCodeDataRequest };