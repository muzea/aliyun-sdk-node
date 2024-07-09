export interface StopLiveMPUTaskRequest {
    /**
     * 应用ID，仅支持传单个ID。由大小写字母、数字、下划线、短划线（-）组成，最大64字符。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 任务ID，仅支持传单个ID。由大小写字母、数字、下划线、短划线（-）组成，最大55字符。此ID为旁路转推的标识，需保证唯一。
     * @example `yourTaskId`
     */
    "TaskId": string;
}
