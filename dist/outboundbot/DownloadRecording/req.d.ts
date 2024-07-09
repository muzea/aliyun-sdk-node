export interface DownloadRecordingRequest {
    /**
     * 实例id
     * @example `da37319b-6c83-4268-9f19-814aed62e401`
     */
    "InstanceId": string;
    /**
     * 任务id，通话来自这个任务
     * @example `744b27f3-437f-4a8c-a181-f668e492fd24`
     */
    "TaskId": string;
    /**
     * 是否查询分段录音
     * @example `false`
     */
    "NeedVoiceSliceRecording"?: boolean;
}
