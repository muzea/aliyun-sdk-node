export interface DeleteBenchmarkTaskRequest {
    /**
     * 压测任务所在区域。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 压测任务名称。如何获取压测任务名称，请参见[ListBenchmarkTask](~~432976~~)。
     * @example `benchmark-larec-test-2b11`
     */
    "TaskName": string;
}
