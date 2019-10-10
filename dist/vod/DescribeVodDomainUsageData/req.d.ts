interface DescribeVodDomainUsageDataRequest {
    "RegionId"?: string;
    /**
    * 获取数据结束时间点，需大于起始时间。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
    * @example `2015-12-10T20:00Z`
    */ "EndTime": string;
    /**
    * 数据类型。取值范围：**bps（带宽）、traf（流量）**。
    * @example `bps`
    */ "Field": string;
    "OwnerId"?: number;
    /**
    * 获取数据起始时间点。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
    * @example `2015-12-10T20:00Z`
    */ "StartTime": string;
    /**
    * 加速域名。若参数为空，默认返回所有加速域名合并后数据。支持批量查询，多个用逗号（半角）分隔。
    * @example `example.com`
    */ "DomainName"?: string;
    /**
    * 用量类型。
    * @example `traf`
    */ "Type"?: string;
    /**
    * 区域代号，默认为CN中国大陆。
    * 取值范围：**CN（中国大陆）**、**OverSeas（海外区域）**。
    * @example `CN`
    */ "Area"?: string;
}
export { DescribeVodDomainUsageDataRequest };