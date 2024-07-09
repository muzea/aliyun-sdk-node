export interface GetAsyncTaskRequest {
    "domain_id": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 异步任务id
         * @example `000e89fb-cf8f-11e9-8ab4-b6e980803a3b`
         */
        async_task_id: string;
    };
}
