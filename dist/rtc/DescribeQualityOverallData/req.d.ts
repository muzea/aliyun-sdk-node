export interface DescribeQualityOverallDataRequest {
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
     * - **JOIN_CHANNEL_SUC_RATE**：加入频道成功率。
     * - **JOIN_CHANNEL_SUC_FIVE_SEC_RATE**：五秒加入频道成功率。
     * - **VIDEO_FIRST_PIC_DUR**：首次出图时间。
     * - **AUDIO_STUCK_RATE**：音频卡顿率。
     * - **VIDEO_STUCK_RATE**：视频卡顿率。
     * - **AUDIO_DELAY**：音频延时。
     * - **VIDEO_DELAY**：视频延时。
     * - **AUDIO_HIGH_QUALITY_TRANSMISSION_RATE**：音频优质传输率。
     * - **VIDEO_HIGH_QUALITY_TRANSMISSION_RATE**：视频优质传输率。
     * @example `JOIN_CHANNEL_SUC_RATE`
     */
    "Types": string;
    /**
     * APP ID。
     * @example `0rbd****
    `
     */
    "AppId": string;
}
