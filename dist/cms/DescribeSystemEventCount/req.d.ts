interface DescribeSystemEventCountRequest {
    "RegionId"?: string;
    /**
    * 产品的名称缩写，具体都有哪些产品接入的系统事件监控，请调用：DescribeSystemEventMetaList接口。
    * @example `oss`
    */ "Product"?: string;
    /**
    * 事件类型，不同的产品事件有不同的类型，调用：DescribeSystemEventMetaList接口获得产品以及产品的事件类型。
    * @example `Exception`
    */ "EventType"?: string;
    /**
    * 事件的名称。
    * @example `BucketIngressBandwidth`
    */ "Name"?: string;
    /**
    * 事件的级别， CRITICAL（严重), WARN(警告), INFO(信息)。
    * @example `warn`
    */ "Level"?: string;
    /**
    * 状态，多个状态用英文逗号分隔。
    * @example `normal`
    */ "Status"?: string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId"?: string;
    /**
    * 搜索事件内容包含的关键字，支持 and 或者 or。
    * - 如果想要搜索事件内容中即包括a也包括b的结果，可以搜索 a and b；
    * - 如果想要搜索事件内容中包括a或者b的结果，可以搜索 a or b。
    * @example `cms`
    */ "SearchKeywords"?: string;
    /**
    * 开始时间，距离1970 年 1 月 1 日 0 点的毫秒数。
    * @example `1552209685596`
    */ "StartTime"?: string;
    /**
    * 结束时间，距离 1970 年 1 月 1 日 0 点的毫秒数。
    * @example `1552220485596`
    */ "EndTime"?: string;
}
export { DescribeSystemEventCountRequest };