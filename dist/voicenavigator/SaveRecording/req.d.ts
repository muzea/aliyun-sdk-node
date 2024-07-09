export interface SaveRecordingRequest {
    /**
     * 实例ID
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 会话ID
     * @example `390515b5-6115-4ccf-83e2-52d5bfaf2ddf`
     */
    "ConversationId": string;
    /**
     * 录音开始时间
     * @example `1582267398628`
     */
    "StartTime": number;
    /**
     * 录音时长
     * @example `10`
     */
    "Duration": string;
    /**
     * 文件名称
     * @example `e6bef0db439d4048bfcf45322491becf.wav`
     */
    "FileName": string;
    /**
     * 文件路径
     * @example `oss://test/record/`
     */
    "FilePath": string;
    /**
     * 录音文件类型
     * @example `Source`
     */
    "Type": string;
    /**
     * 实例所属账号id
     * @example `1971226538081821`
     */
    "InstanceOwnerId"?: number;
    "VoiceSliceRecordingList"?: string;
}
