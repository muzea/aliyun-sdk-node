interface DescribeDomainUsageDataRequest {
    "RegionId"?: string;
    /**
    * 获取数据起始时间点。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。最小数据粒度为5分钟。
    * @example `2015-12-10T20:00:00Z`
    */ "StartTime": string;
    /**
    * 获取数据结束时间。结束时间需大于起始时间，不能相差超过31天。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2015-12-10T22:00:00Z`
    */ "EndTime": string;
    /**
    * 请求的数据类型。包括：**bps**、**traf**、**acc**。其中**acc**不支持**area**参数。
    * @example `bps`
    */ "Field": string;
    "OwnerId"?: number;
    /**
    * 需要获取的数据的协议。包括**https**、**http**和**all**。默认为**all**。
    * @example `all`
    */ "DataProtocol"?: string;
    /**
    * 如果参数为空，默认返回所有加速域名合并后数据。
    * 可以输入需要查询的加速域名，支持批量域名查询，多个域名用逗号（,）分隔。
    * @example `example.com`
    */ "DomainName"?: string;
    /**
    * 区域代号。包括：**CN**、**OverSeas**、**AP1**、**AP2**、**AP3**、**NA**、**SA**、**EU**、**MEAA**、**all**。
    * 不传为CN：中国大陆。
    * @example `CN`
    */ "Area"?: string;
    /**
    * 强制指定获取指定时间粒度的数据。支持**300**、**3600**或**86400**，分别代表5分钟、1小时和1天。
    * > - 如果指定Interval为300，最长可查询近半年的数据，单次查询时间跨度最长为3天。
    * - 如果指定Interval为3600或86400，最长可查询近1年的数据。
    * - 如果不指定Interval，单次查询跨度最长为1个月。当查询时间为1-3天时，数据按小时粒度返回；当查询时间大于4天时，数据按天粒度返回。
    * @example `300`
    */ "Interval"?: string;
}
export { DescribeDomainUsageDataRequest };