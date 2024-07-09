export interface DescribeFaultDiagnosisOverallDataRequest {
    /**
     * APP ID。
     * @example `4eah****`
     */
    "AppId": string;
    /**
     * 查询的开始时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615824000`
     */
    "StartTs": number;
    /**
     * 查询的结束时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615910399`
     */
    "EndTs": number;
    /**
     * 获取数据统计维度。取值：
     * - **JOIN_SLOW_USER**：进频道慢用户数。
     * - **AUDIO_STUCK_USER**：音频卡顿用户数。
     * - **VIDEO_STUCK_USER**：视频卡顿用户数。
     * - **VIDEO_VAGUE_USER**：视频模糊用户数。
     * - **HIGH_DELAY_USER**：通话延迟高用户数。
     * - **FIRST_FRAME_SLOW_USER**：接收首屏慢用户数。
     * @example `JOIN_SLOW_USER`
     */
    "StatDim": string;
}
