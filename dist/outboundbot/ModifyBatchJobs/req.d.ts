export interface ModifyBatchJobsRequest {
    /**
     * 实例id
     * @example `174952ab-9825-4cc9-a5e2-de82d7fa4cdd`
     */
    "InstanceId": string;
    /**
     * 作业组id
     * @example `c6a668d1-3145-4048-9101-cb3678bb8884`
     */
    "JobGroupId": string;
    /**
     * 作业名称
     * @example `催收作业组`
     */
    "BatchJobName": string;
    /**
     * 作业组描述
     * @example `这是催收作业组-01`
     */
    "Description"?: string;
    /**
     * 场景id
     * @example `c6a668d1-3145-4048-9101-cb3678bb8884`
     */
    "ScenarioId"?: string;
    /**
     * 策略json
     * @example `{"maxAttemptsPerDay":2,"name":"策略名字","workingTime":[{"beginTime":"09:00:00","endTime":"12:00:00"},{"beginTime":"13:00:00","endTime":"18:30:00"}],"minAttemptInterval":60}`
     */
    "StrategyJson"?: string;
    /**
     * 作业excel文件下载地址
     * @example `52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx`
     */
    "JobFilePath"?: string;
    /**
     * 是否提交，false 提交，true保存为草稿状态
     * @example `false`
     */
    "Submitted": boolean;
    /**
     * 话术ID
     * @example `7d820242-f4f0-4d2e-ae35-b424c41cbc5b`
     */
    "ScriptId"?: string;
    /**
     * 主叫号码
     * @example `["95187"]`
     */
    "CallingNumber"?: string[];
}
