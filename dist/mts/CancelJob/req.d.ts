export interface CancelJobRequest {
    /**
     * 需要取消的转码作业ID。可以通过**MPS控制台** > **任务管理**获取，或者从[提交转码作业](~~29226~~)的返回参数中获取。
     * @example `d1ce4d3efcb549419193f50f1fcd****`
     */
    "JobId": string;
}
