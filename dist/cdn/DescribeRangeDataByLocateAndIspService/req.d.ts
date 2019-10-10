interface DescribeRangeDataByLocateAndIspServiceRequest {
    "RegionId"?: string;
    /**
    * 要查询的域名，仅支持单个。
    * @example `abc.com`
    */ "DomainNames": string;
    /**
    * 获取数据开始时间点。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 最小数据粒度为5分钟。
    * @example `2017-12-22T07:00:00:00Z`
    */ "StartTime": string;
    /**
    * 获取数据结束时间点。
    * - 结束时间大于开始时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。
    * @example `2017-12-22T08:00:00:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 需要查询目标Isp（运营商）列表，用逗号（,）隔开，不能为空。
    * ISP名通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
    * @example `unicom,telecom`
    */ "IspNames"?: string;
    /**
    * 需要查询目标区域列表，用逗号（,）隔开，不能为空。
    * Location（区域）名通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得。
    * @example `liaoning,guangxi`
    */ "LocationNames"?: string;
}
export { DescribeRangeDataByLocateAndIspServiceRequest };