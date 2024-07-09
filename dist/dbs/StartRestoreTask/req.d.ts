export interface StartRestoreTaskRequest {
    /**
     * 恢复任务ID。
     * @example `s102h7rfXXXX`
     */
    "RestoreTaskId": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
