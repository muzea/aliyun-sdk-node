interface DescribeCustomEventHistogramRequest {
    "RegionId"?: string;
    /**
    * 事件名称。
    * @example `BucketIngressBandwidth`
    */ "Name"?: string;
    /**
    * 事件的级别， CRITICAL（严重)、 WARN(警告)、INFO(信息)。
    * @example `CRITICAL`
    */ "Level"?: string;
    /**
    * 事件ID。
    * @example `123`
    */ "EventId"?: string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId"?: string;
    /**
    * 搜索事件内容包含的关键字表达式，支持 and 或者 or。
    * - 如果想要搜索事件内容中即包括a又包括b的结果，可以搜索 a and b。
    * - 如果想要搜索事件内容中包括a或者b的结果，可以搜索 a or b。
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
}
export { DescribeCustomEventHistogramRequest };