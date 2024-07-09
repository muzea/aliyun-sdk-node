export interface CreateBatchJobsRequest {
    /**
     * 实例id
     * @example `174952ab-9825-4cc9-a5e2-de82d7fa4cdd`
     */
    "InstanceId": string;
    /**
     * 批量作业名字
     * @example `第一个作业组`
     */
    "BatchJobName": string;
    /**
     * 批量作业名字
     * @example `描述`
     */
    "BatchJobDescription"?: string;
    /**
     * 场景id
     * @example `c6a668d1-3145-4048-9101-cb3678bb8884`
     */
    "ScenarioId"?: string;
    /**
     * 话术id
     * @example `b9ff4e88-65f9-4eb3-987c-11ba51f3f24d`
     */
    "ScriptId"?: string;
    /**
     * 作业执行策略json
     * @example `{"maxAttemptsPerDay":2,"name":"策略名字","workingTime":[{"beginTime":"09:00:00","endTime":"12:00:00"},{"beginTime":"13:00:00","endTime":"18:30:00"}],"minAttemptInterval":60}`
     */
    "StrategyJson"?: string;
    /**
     * 下载批量作业excel的地址
     * @example `52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx`
     */
    "JobFilePath"?: string;
    /**
     * 是否提交，false 提交，true 草稿状态
     * @example `false`
     */
    "Submitted": boolean;
    /**
     * 主叫号码列表。
     * @example `["95187"]`
     */
    "CallingNumber"?: string[];
}
