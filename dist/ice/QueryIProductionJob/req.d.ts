export interface QueryIProductionJobRequest {
    /**
     * 幂等参数
     */
    "ClientToken"?: string;
    /**
     * 智能任务ID
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "JobId": string;
}
