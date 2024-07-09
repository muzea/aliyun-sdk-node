export interface StopAsyncTaskRequest {
    /**
     * 函数名称。
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 异步任务ID。
     * @example `e026ae92-61e5-472f-b32d-1c9e3c4e****`
     */
    "taskId": string;
    /**
     * 函数版本或别名。
     * @example `LATEST`
     */
    "qualifier"?: string;
}
