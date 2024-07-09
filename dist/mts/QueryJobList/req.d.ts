export interface QueryJobListRequest {
    /**
     * 转码作业ID。
     * - 一次最多查询10个，使用半角逗号（,）分隔。
     * - 可以通过[MPS控制台](https://mps.console.aliyun.com/overview) > **任务管理**获取，也可以从[提交转码作业](~~29226~~)的返回参数中获取。
     * > 如果不传入此参数，则会返回`InvalidParameter`（参数无效）错误码。
     * @example `bb558c1cc25b45309aab5be44d19****,d1ce4d3efcb549419193f50f1fcd****`
     */
    "JobIds"?: string;
}
