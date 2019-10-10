interface DescribeSystemEventHistogramRequest {
    "RegionId"?: string;
    /**
    * 产品的名称缩写。
    * @example `oss`
    */ "Product"?: string;
    /**
    * 事件类型，不同的产品事件有不同的类型。
    * @example `Exception`
    */ "EventType"?: string;
    /**
    * 事件名称。
    * @example `BucketIngressBandwidth`
    */ "Name"?: string;
    /**
    * 事件级别， CRITICAL（严重), WARN(警告), INFO(信息)。
    * @example `CRITICAL`
    */ "Level"?: string;
    /**
    * 状态，多个用逗号分隔。
    * @example `normal`
    */ "Status"?: string;
    /**
    * 组ID。
    * @example `12345`
    */ "GroupId"?: string;
    /**
    * 搜索事件内容包含的关键字，支持 and 或者 or。
    * 如果想要搜索事件内容中即包括a也包括b的结果，可以搜索 a and b；
    * 如果想要搜索事件内容中包括a或者b的结果，可以搜索 a or b。
    * @example `cms`
    */ "SearchKeywords"?: string;
    /**
    * 开始时间。
    * @example `1552209685596`
    */ "StartTime"?: string;
    /**
    * 结束时间。
    * @example `1552220485596`
    */ "EndTime"?: string;
    /**
    * 页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页显示记录条数。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeSystemEventHistogramRequest };