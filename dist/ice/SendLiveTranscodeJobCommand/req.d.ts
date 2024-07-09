export interface SendLiveTranscodeJobCommandRequest {
    /**
     * 转码任务ID。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "JobId": string;
    /**
     * 操作指令。当前仅支持stop。用于关闭转码任务。
     * @example `stop`
     */
    "Command": string;
}
