export interface DescribeFaultDiagnosisUserDetailRequest {
    /**
     * APP ID。
     * @example `0rbd****
    `
     */
    "AppId": string;
    /**
     * 频道ID
     * @example `311`
     */
    "ChannelId": string;
    /**
     * 频道创建时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615892596`
     */
    "CreatedTs": number;
    /**
     * 用户ID
     * @example `c906531af5f9****`
     */
    "UserId": string;
    /**
     * 异常类型。取值：
     * - **JOIN_SLOW**：进频道慢 。
     * - **AUDIO_STUCK**：音频卡顿。
     * - **VIDEO_STUCK**：视频卡顿。
     * - **VIDEO_VAGUE**：视频模糊。
     * - **HIGH_DELAY**：通话延迟高 。
     * - **FIRST_FRAME_SLOW**：接收首屏慢。
     * @example `JOIN_SLOW`
     */
    "FaultType": string;
    /**
     * 是否查询通话用户信息，为空默认是false。
     * @example `true`
     */
    "QueryCallUserInfo"?: boolean;
}
