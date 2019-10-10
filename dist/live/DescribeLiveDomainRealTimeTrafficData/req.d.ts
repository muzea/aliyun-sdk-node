interface DescribeLiveDomainRealTimeTrafficDataRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 可输入需要查询的加速域名。
    * > 支持批量域名查询，多个域名用逗号（半角）分隔。若参数为空，默认返回所有加速域名合并后数据。
    * @example `test.com`
    */ "DomainName": string;
    /**
    * 获取数据起始时间点。日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ` 。
    * > 不写默认读取过去1小时数据。
    * @example `2015-12-10T20:00:00Z`
    */ "StartTime"?: string;
    /**
    * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
    * @example `alibaba`
    */ "IspNameEn"?: string;
    /**
    * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
    * @example `tianjin`
    */ "LocationNameEn"?: string;
    /**
    * 结束时间需大于起始时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
    * @example `2015-12-10T20:01:00Z`
    */ "EndTime"?: string;
}
export { DescribeLiveDomainRealTimeTrafficDataRequest };