interface DescribeDomainFileSizeProportionDataRequest {
    "RegionId"?: string;
    /**
    * 需要查询的加速域名，只支持一个域名。
    * 如果参数为空，查询当前用户下所有域名。
    * @example `test.test.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 获取数据起始时间点，不写默认读取过去24小时数据。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 最小数据粒度为1小时。
    * @example `2015-11-30T01:33Z`
    */ "StartTime"?: string;
    /**
    * 获取数据结束时间点。
    * - 结束时间需大于起始时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2015-11-30T05:40Z`
    */ "EndTime"?: string;
}
export { DescribeDomainFileSizeProportionDataRequest };