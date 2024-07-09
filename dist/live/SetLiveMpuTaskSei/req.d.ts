export interface SetLiveMpuTaskSeiRequest {
    /**
     * 订阅的应用ID。
     * > 应用ID由大小写字母、数字、下划线、短划线（-）组成，最大64字符。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 任务ID。
     * > 任务ID由大小写字母、数字、下划线、短划线（-）组成，最大55字符。
     * @example `yourTaskId`
     */
    "TaskId": string;
    /**
     * 自定义SEI。
     * > 自定义SEI为json字符串，不超过4096个字符。
     * @example `{"key": "value"}`
     */
    "CustomSei": string;
}
