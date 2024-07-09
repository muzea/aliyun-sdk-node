export interface DescribeFaultDiagnosisUserListRequest {
    /**
     * APP ID。
     * @example `0rbd****
    `
     */
    "AppId": string;
    /**
     * 查询的开始时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615806196`
     */
    "StartTs": number;
    /**
     * 查询的结束时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615892596`
     */
    "EndTs": number;
    /**
     * 搜索的频道ID。
     * @example `311`
     */
    "ChannelId"?: string;
    /**
     * 搜索的用户ID。
     * @example `c906531af5f9****`
     */
    "UserId"?: string;
    /**
     * 过滤的异常类型，多个用英文逗号（,）分隔。取值：
     * - **JOIN_SLOW**：进频道慢。
     * - **AUDIO_STUCK**：音频卡顿。
     * - **VIDEO_STUCK**：视频卡顿。
     * - **VIDEO_VAGUE**：视频模糊。
     * - **HIGH_DELAY**：通话延迟高。
     * - **FIRST_FRAME_SLOW**：接收首屏慢。
     * 关于异常类型详情，请参见[异常类型说明](~~2639494~~)。
     * @example `JOIN_SLOW,AUDIO_STUCK`
     */
    "FaultTypes"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 每页数量。
     * @example `10`
     */
    "PageSize": number;
}
