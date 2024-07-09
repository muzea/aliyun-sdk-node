export interface DescribeEndPointEventListRequest {
    /**
     * APP ID。
     * @example `testappid`
     */
    "AppId": string;
    /**
     * 频道ID。
     * @example `testid`
     */
    "ChannelId": string;
    /**
     * 事件查询时间区间的开始时间，该时间不得早于频道实际的创建时间，不得早于30天之前。使用UNIX时间戳表示，单位：秒。
     * @example `1614936817`
     */
    "CreatedTs": number;
    /**
     * 事件查询时间区间的结束时间，该时间不得晚于频道释放时间。使用UNIX时间戳表示，单位：秒。参数为空，表示获取当前时间。
     * @example `1614936817`
     */
    "DestroyedTs"?: number;
    /**
     * 用户ID列表，多个用英文逗号（,）分隔。
     * @example `testuserid1,testuserid2`
     */
    "UserIdList": string;
}
