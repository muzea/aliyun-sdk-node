interface DescribeVodDomainTrafficDataRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 要查询的域名。若为空，则默认返回所有加速域名的合并数据。支持批量查询，多个域名用半角逗号分隔。
    * @example `example.com`
    */ "DomainName"?: string;
    /**
    * 获取数据起始时间点。
    * - 日期格式按照ISO8601表示法，使用UTC时间。格式为：**YYYY-MM-DDThh:mmZ**。
    * - 最小数据粒度为5分钟，若为空，则默认读取最近24小时的数据。
    * @example `2019-01-20T15:59:58Z`
    */ "StartTime"?: string;
    /**
    * 结束时间，需大于起始时间。
    * 日期格式按照ISO8601表示法，使用UTC时间。格式为：**YYYY-MM-DDThh:mmZ**。
    * @example `2019-01-20T15:59:58Z`
    */ "EndTime"?: string;
    /**
    * 查询数据的时间粒度，支持**300**，**3600**和**86400**秒。不传和传的值不支持时，使用默认值。
    * - 3天以内（不包含3天整）支持300(默认), 3600, 86400。
    * - 3-31天（不包含31天整）支持3600(默认)和86400。
    * - 31天以上支持86400(默认)。
    * @example `300`
    */ "Interval"?: string;
    /**
    * 运营商英文名。默认为所有运营商。
    * @example `Alibaba`
    */ "IspNameEn"?: string;
    /**
    * 区域英文名。默认为所有区域。
    * @example `cn-shanghai`
    */ "LocationNameEn"?: string;
}
export { DescribeVodDomainTrafficDataRequest };