interface DescribeRtcChannelUserListRequest {
    "RegionId"?: string;
    /**
    * 应用ID。
    * @example `xxx`
    */ "AppId": string;
    /**
    * 页号。
    * @example `0`
    */ "PageNo": number;
    /**
    * 显示数量。
    * @example `100`
    */ "PageSize": number;
    /**
    * 查询时间点日期，时间粒度为天，UTC格式。
    * @example `2018-01-29T00:00:00Z`
    */ "TimePoint": string;
    "OwnerId"?: number;
    /**
    * 频道ID。
    * @example `xx`
    */ "ChannelId"?: string;
}
export { DescribeRtcChannelUserListRequest };