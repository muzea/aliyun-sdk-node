export interface DescribeEndPointMetricDataRequest {
    /**
     * APP ID。
     * @example `testappid`
     */
    "AppId": string;
    /**
     * 频道ID
     * @example `testid`
     */
    "ChannelId": string;
    /**
     * 查询时间区间的开始时间，该时间不得早于频道实际的创建时间，不得早于30天之前。使用UNIX时间戳表示，单位：秒。
     * @example `1614936817`
     */
    "CreatedTs": number;
    /**
     * 查询时间区间的结束时间，该时间不得晚于频道释放时间。使用UNIX时间戳表示，单位：秒。参数为空，表示获取当前时间。
     * > 如果传入的结束时间超过频道的释放时间，将返回从开始时间开始到频道释放时间之间的数据，且最多返回最近3个小时的数据。
     * @example `1614936817`
     */
    "DestroyedTs"?: number;
    /**
     * 订阅端用户ID。
     * @example `testuserid`
     */
    "SubUserId"?: string;
    /**
     * 发布端用户ID。
     * > PubUserId和PubCallIdList参数只能二选一输入。
     * @example `testuserid2`
     */
    "PubUserId"?: string;
    /**
     * 发布端用户通信流的Call ID，多个用英文逗号（,）分隔。
     * > PubUserId和PubCallIdList参数只能二选一输入。
     * @example `testcall1,testcall2`
     */
    "PubCallIdList"?: string;
    /**
     * 指标枚举列表，多个用英文逗号（,）分隔。
     * @example `VIDEO_STUCK_CAMERA`
     */
    "Metrics": string;
}
