interface DescribeLiveDomainBpsDataRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 需要查询的直播域名。
    * 若参数为空，默认返回所有直播域名合并后数据。
    * @example `test.com`
    */ "DomainName"?: string;
    /**
    * 获取数据起始时间点。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 最小数据粒度为**5**分钟。
    * - 最大数据粒度为**1**天。
    * - 最长可查询**90**天内的数据。
    * @example `2017-12-10T20:00:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间需大于起始时间。
    * - 获日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 最小数据粒度为**5**分钟。
    * - 最大数据粒度为**1**天。
    * - 最长可查询**90**天内的数据。
    * @example `2017-12-10T21:00:00Z`
    */ "EndTime"?: string;
    /**
    * 查询数据的时间粒度，支持**300（默认值）**, **3600**和**86400**秒。
    * > 不传或传值不支持时，使用默认值300秒。
    * @example `300`
    */ "Interval"?: string;
    /**
    * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
    * @example `alibaba`
    */ "IspNameEn"?: string;
    /**
    * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
    * @example `tianjin`
    */ "LocationNameEn"?: string;
}
export { DescribeLiveDomainBpsDataRequest };