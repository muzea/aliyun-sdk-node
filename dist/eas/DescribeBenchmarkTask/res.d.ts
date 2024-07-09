export interface DescribeBenchmarkTaskResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 压测任务名称。
     * @example `benchmark-larec-test-ae70`
     */
    TaskName: string;
    /**
     * 压测任务ID。
     * @example `eas-b-gv4y86u****`
     */
    TaskId: string;
    /**
     * 待压测的服务名称。
     * @example `foo`
     */
    ServiceName: string;
    /**
     * 创建压测任务的鉴权凭证。
     * @example `6062787a-9301****`
     */
    Token: string;
    /**
     * 当前调用者ID。
     * @example `1640133467****`
     */
    CallerUid: string;
    /**
     * 当前调用的主账号。
     * @example `1029728669****`
     */
    ParentUid: string;
    /**
     * 预期的压测实例个数。
     * @example `4`
     */
    DesiredAgent: number;
    /**
     * 可用的压测实例个数。
     * @example `4`
     */
    AvailableAgent: number;
    /**
     * 压测任务的执行状态。
     * @example `Running`
     */
    Status: string;
    /**
     * 压测任务处于当前状态的事件或原因。
     * @example `RUNNING`
     */
    Reason: string;
    /**
     * 压测任务执行状态的摘要信息。
     * @example `Benchmar task is Running`
     */
    Message: string;
    /**
     * 服务网关Endpoint。
     * @example `192342311234.pai-eas.cn-chengdu.aliyuncs.com`
     */
    Endpoint: string;
}
