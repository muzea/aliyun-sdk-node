export interface VoiceModerationCancelRequest {
    /**
     * 审核服务类型，包括：
     * nickname_detection：用户昵称
     * 待定
     * @example `nickname_detection`
     */
    "Service": string;
    /**
     * 待取消任务TaskId
     * @example `{
            "taskId": "xxxxx-xxxx"
        }`
     */
    "ServiceParameters"?: string;
}
