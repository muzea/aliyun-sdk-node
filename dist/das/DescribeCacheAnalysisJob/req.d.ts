export interface DescribeCacheAnalysisJobRequest {
    /**
     * 实例ID。
     * @example `r-bp18ff4a195d****`
     */
    "InstanceId": string;
    /**
     * 缓存分析任务ID，您可通过调用[CreateCacheAnalysisJob](~~180982~~)接口获取返回参数的JobId。
     * @example `sf79-sd99-sa37-****`
     */
    "JobId": string;
}
