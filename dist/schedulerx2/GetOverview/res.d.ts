export interface GetOverviewResponse {
    /**
     * Id of the request
     * @example `39090022-1F3B-4797-8518-6B61095F1AF0`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: number;
    /**
     * API调用是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息，仅出错时返回错误信息。
     * @example `No access permission for the namespace [***]`
     */
    Message: string;
    /**
     * JSON的概览数据信息，对应控制台概览数据内容，如下三种格式类型结果
     * - 基础信息
     * - 时间区间任务运行信息：
     * - 时间区间任务运行时序信息：返回对应区间 任务触发、运行成功、运行失败三个数据项对应时点的统计信息
     * @example `基础信息：{"schedulerx_job_counter_disable": "4","schedulerx_job_trigger_counter_running": "0","schedulerx_job_counter_enable": "70","schedulerx_job_counter_all": "74","schedulerx_worker_counter": "2"}`
     */
    Data: string;
}
