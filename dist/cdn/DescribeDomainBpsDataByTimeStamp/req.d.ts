interface DescribeDomainBpsDataByTimeStampRequest {
    "RegionId"?: string;
    /**
    * 要查询的域名，仅支持单个查询。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    /**
    * 查询目标时间点。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 最小数据粒度为5分钟。
    * @example `2016-08-01T22:00Z`
    */ "TimePoint": string;
    /**
    * 需要查询目标Isp列表，用逗号（,）隔开，不能为空， ISP名通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
    * @example `unicom,telecom`
    */ "IspNames": string;
    /**
    * 需要查询目标区域列表，用逗号（,）隔开，不能为空。Location名通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
    * @example `liaoning,guangxi`
    */ "LocationNames": string;
    "OwnerId"?: number;
}
export { DescribeDomainBpsDataByTimeStampRequest };