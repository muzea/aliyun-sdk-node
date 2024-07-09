export interface CreateBenchmarkTaskResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82********`
     */
    RequestId: string;
    /**
     * 压测任务名字。
     * @example `benchmark-larec-test-1076`
     */
    TaskName: string;
    /**
     * 压测任务所在的区域。
     * @example `cn-shanghai`
     */
    Region: string;
    /**
     * 请求返回信息。
     * @example `Benchmark  task [foo] is Creating`
     */
    Message: string;
}
