interface DescribeRtcChannelMetricRequest {
    "RegionId"?: string;
    /**
    * 时间点，天粒度，UTC格式。
    * @example `2018-01-29T00:00:00Z`
    */ "TimePoint": string;
    /**
    * 应用ID。
    * @example `xxx`
    */ "AppId": string;
    /**
    * 频道ID。
    * @example `0101`
    */ "ChannelId": string;
    "OwnerId"?: number;
}
export { DescribeRtcChannelMetricRequest };