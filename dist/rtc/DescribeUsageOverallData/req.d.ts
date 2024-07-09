export interface DescribeUsageOverallDataRequest {
    /**
     * 查询的开始时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615824000`
     */
    "StartDate": number;
    /**
     * 查询的结束时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615910399`
     */
    "EndDate": number;
    /**
     * 查询的指标类型，多个用英文逗号（,）分隔。取值：
     * - **TOTAL_CALL_DURATION**：总时长。
     * - **VIDEO_CALL_DURATION**：视频通信时长。
     * - **AUDIO_CALL_DURATION**：音频通信时长。
     * - **CALL_CHANNEL_COUNT**：通信频道数。
     * - **HIGHLY_CONCURRENT_CHANNEL_COUNT**：高并发通信频道数。
     * - **CHANNEL_CONCURRENT_PEAK**：并发频道数峰值。
     * - **ONLINE_USER_PEAK**：在线人数峰值。
     * - **TOTAL_CALL_USER**：累计通话人数。
     * - **TOTAL_INOUT_NUM**：累计进出人次。
     * @example `ONLINE_USER_PEAK`
     */
    "Types": string;
    /**
     * APP ID。
     * @example `a2hz****`
     */
    "AppId": string;
}
