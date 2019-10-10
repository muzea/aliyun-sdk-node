interface DescribeRtcChannelListRequest {
    "RegionId"?: string;
    /**
    * 查询时间点，时间粒度为天，UTC格式。
    * @example `2018-01-29T00:00:00Z`
    */ "TimePoint": string;
    /**
    * 页号。
    * @example `1`
    */ "PageNo": number;
    /**
    * 显示数量。
    * @example `20`
    */ "PageSize": number;
    "OwnerId"?: number;
    /**
    * 应用ID。
    * @example `xxx`
    */ "AppId"?: string;
    /**
    * 排序顺序，默认按**starttime**逆序。
    * @example `desc`
    */ "SortType"?: string;
    /**
    * 服务区域，不填表示所有区域。
    * @example `cn`
    */ "ServiceArea"?: string;
    /**
    * 用户ID。
    * @example `a123`
    */ "UserId"?: string;
    /**
    * 频道ID。
    * @example `123`
    */ "ChannelId"?: string;
}
export { DescribeRtcChannelListRequest };