export interface DescribePlayListRequest {
    /**
     * 页码。默认值：1。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 每页大小。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 播放器的TraceId。
     * @example `0bc5e70516766285805381012d271e`
     */
    "TraceId"?: string;
    /**
     * 开始时间，默认查询当天的时间。
     * @example `1676170500011`
     */
    "BeginTs": string;
    /**
     * 结束时间，不能超过24小时。
     * @example `1682474405173`
     */
    "EndTs": string;
    /**
     * 排序类型。取值：
     * - DESC：倒序
     * - ASC：正序
     * @example `DESC`
     */
    "OrderType"?: string;
    /**
     * 排序名称。取值：
     * - FirstFrameDuration：首帧耗时
     * - PlayDuration：播放时长
     * - VideoDuration：视频时长
     * - StuckDuration：卡顿时长
     * @example `FirstFrameDuration`
     */
    "OrderName"?: string;
    /**
     * 播放类型。取值：
     * - vod：点播
     * @example `vod`
     */
    "PlayType"?: string;
    /**
     * 播放状态。取值：
     * - complete：播放完成
     * - playing：播放中
     * - unusual：播放异常
     * @example `complete`
     */
    "Status"?: string;
}
