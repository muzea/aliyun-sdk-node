export interface GetCalculationJobRequest {
    /**
     * 计算任务ID。
     * @example `1`
     */
    "CalculationJobId": string;
    /**
     * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
     * @example `pairec-cn-test1`
     */
    "InstanceId": string;
}
