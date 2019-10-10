interface DescribeDomainSrcHttpCodeDataRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 需要查询的加速域名，多个域名用逗号（,）分隔。
    * @example `example1.com,example2.com`
    */ "DomainName"?: string;
    /**
    * 获取数据起始时间点，不写默认读取过去24小时数据。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 最小数据粒度为5分钟。
    * @example `2015-11-30T05:33:00Z`
    */ "StartTime"?: string;
    /**
    * 获取数据结束时间点。
    * - 结束时间需大于起始时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2015-11-30T05:40:00Z`
    */ "EndTime"?: string;
    /**
    * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。不传和传的值不支持时，使用默认值。
    * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
    * - 3-31天（不包含31天整）支持**3600**和**86400**。
    * - 31天以上支持**86400**。
    * @example `300`
    */ "Interval"?: string;
}
export { DescribeDomainSrcHttpCodeDataRequest };