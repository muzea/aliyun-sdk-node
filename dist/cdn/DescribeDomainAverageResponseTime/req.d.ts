interface DescribeDomainAverageResponseTimeRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 是否自适应计算interval值，如果timeMerge=1，会根据startTime和endTime计算出合适的inteval值，和interval参数任选。
    * @example `1`
    */ "TimeMerge"?: string;
    /**
    * 域名类型。
    * @example `domaintyoe`
    */ "DomainType"?: string;
    /**
    * 如果参数为空，默认返回所有加速域名合并后数据。
    * 可以输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
    * @example `example.com`
    */ "DomainName"?: string;
    /**
    * 获取数据起始时间点。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 最小数据粒度为5分钟，不写默认读取过去24小时数据。
    * @example `2015-12-10T20:00:00Z`
    */ "StartTime"?: string;
    /**
    * 获取数据的结束时间点。结束时间需大于起始时间。
    * - 获取日期格式按照ISO8601表示法，并使用UTC时间。
    * - 格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2015-12-10T21:00:00Z`
    */ "EndTime"?: string;
    /**
    * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
    * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**。
    * - 3-31天（不包含31天整）支持**3600**和**86400**。
    * - 31天以上支持**86400**。
    * 不传和传的值不支持时，使用默认值。
    * @example `300`
    */ "Interval"?: string;
    /**
    * 运营商英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有运营商。
    * @example `unicom`
    */ "IspNameEn"?: string;
    /**
    * 区域英文名，通过[DescribeCdnRegionAndIsp](~~91077~~)接口获得，不传为所有区域。
    * @example `beijing`
    */ "LocationNameEn"?: string;
}
export { DescribeDomainAverageResponseTimeRequest };