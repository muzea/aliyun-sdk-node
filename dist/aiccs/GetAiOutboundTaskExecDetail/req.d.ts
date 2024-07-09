export interface GetAiOutboundTaskExecDetailRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `agent_***`
     */
    "InstanceId": string;
    /**
     * 任务ID。
     * 可调用[CreateAiOutboundTask](~~312260~~)接口，查看返回参数中的**Data**，或者调用[GetAiOutboundTaskList](~~2718026~~)接口，查看返回参数中的**TaskId**。
     * @example `123456`
     */
    "TaskId": number;
    /**
     * 任务批次。
     * @example `1`
     */
    "BatchVersion"?: number;
    /**
     * 外呼号码。
     * @example `150****000`
     */
    "PhoneNum"?: string;
    /**
     * 单条号码任务执行状态。取值：
     * - **1**：待呼叫。
     * - **2**：呼叫中。
     * - **3**：已完成。
     * - **4**：已终止。
     * - **5**：待重呼。
     * @example `1`
     */
    "CaseStatus"?: number;
    /**
     * 号码导入起始时间。时间戳格式，单位戳：毫秒。
     * @example `1632289999000`
     */
    "CreateTimeStart"?: number;
    /**
     * 号码导入结束时间。时间戳格式，单位戳：毫秒。
     * @example `1632290119000`
     */
    "CreateTimeEnd"?: number;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 本次外呼关联的活动ID。
     * @example `123456`
     */
    "CaseId"?: number;
}
