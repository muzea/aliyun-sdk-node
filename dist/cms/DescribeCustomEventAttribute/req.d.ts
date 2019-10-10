interface DescribeCustomEventAttributeRequest {
    "RegionId"?: string;
    /**
    * 事件名称。
    * @example `BOSS-SYNC`
    */ "Name"?: string;
    /**
    * 事件级别， CRITICAL（严重)、WARN(警告)、 INFO(信息)。
    * @example `WARN`
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
    * 搜索事件内容包含的关键字，支持 and 或者 or。
    * - 如果想要搜索事件内容中即包括a又包括b的结果，可以搜索 a and b
    * - 如果想要搜索事件内容中包括a或者b的结果，可以搜索 a or b
    * @example `cms`
    */ "SearchKeywords"?: string;
    /**
    * 开始时间。
    * @example `1552224365971`
    */ "StartTime"?: string;
    /**
    * 结束时间。
    * @example `1552227965971`
    */ "EndTime"?: string;
    /**
    * 页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页记录条数。
    * @example `50`
    */ "PageSize"?: number;
}
export { DescribeCustomEventAttributeRequest };