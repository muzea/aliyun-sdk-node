export interface ResumeWhiteBoardRecordingRequest {
    /**
     * 白板应用唯一标识符。获取AppID，请参见[CreateApp](~~204234~~)。
     * @example `7mbj****`
     */
    "AppID": string;
    /**
     * 恢复白板录制的用户ID（客户业务用户），由1~32位大小写字母、数字、下划线、短划线（-）组成。
     * @example `123456`
     */
    "UserId": string;
    /**
     * 白板文档唯一标识符。获取DocKey，请参见[CreateWhiteBoard](~~204299~~)。
     * @example `4EZlwmRW0gDG****`
     */
    "DocKey": string;
    /**
     * 白板录制Session的唯一标识符。获取RecordId，请参见[StartWhiteBoardRecording](~~253300~~)。
     * @example `8a4556336bc6456b918e8eedbed6****`
     */
    "RecordId": string;
}
