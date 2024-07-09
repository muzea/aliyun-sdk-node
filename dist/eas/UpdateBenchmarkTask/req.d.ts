export interface UpdateBenchmarkTaskRequest {
    /**
     * 压测任务所在区域。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 压测任务名字。
     * @example `benchmark-larec-test-645c`
     */
    "TaskName": string;
    /**
     * 压测任务配置参数，详情请参见**表1. base描述表**。
     * @example `{
        "base":  {
             "qps": 200
        }
    }`
     */
    "body"?: string;
}
