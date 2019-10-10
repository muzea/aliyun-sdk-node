interface DescribeDomainReqHitRateDataRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 需要查询的加速域名，只支持一个域名，不写代表查询当前用户下所有域名。
    * @example `www.yourdomain.com`
    */ "DomainName"?: string;
    /**
    * 获取数据起始时间点。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 最小数据粒度为5分钟，不写默认读取过去24小时数据。
    * @example `2017-12-21T08:00:00:00Z`
    */ "StartTime"?: string;
    /**
    * 获取数据结束时间点。
    * - 结束时间需大于起始时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2017-12-22T08:00:00:00Z`
    */ "EndTime"?: string;
    /**
    * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
    * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
    * - 3-31天（不包含31天整）支持**3600**和**86400**。
    * - 31天以上支持**86400**。
    * 不传和传的值不支持时，使用默认值。
    * @example `300`
    */ "Interval"?: string;
}
export { DescribeDomainReqHitRateDataRequest };