export interface GetAiOutboundTaskListRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `agent_****`
     */
    "InstanceId": string;
    /**
     * 任务类型。取值：
     * - **2**：预测式外呼。
     * - **3**：自动外呼。
     * @example `2`
     */
    "Type": number;
    /**
     * 任务创建起始时间。时间戳格式，单位：毫秒。
     * @example `1615083365000`
     */
    "CreateTimeStart"?: number;
    /**
     * 任务创建截止时间。时间戳格式，单位：毫秒。
     * @example `1617761765000`
     */
    "CreateTimeEnd"?: number;
    /**
     * 任务状态。取值：
     * - **0**：未开始。
     * - **1**：进行中。
     * - **2**：系统暂停。
     * - **3**：手动暂停。
     * - **4**：已完成。
     * - **5**：已终止。
     * @example `1`
     */
    "Status"?: number;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 查询第几页。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 过滤条件。
     * > 匹配任务ID或模糊匹配任务名称。
     * @example `1763****`
     */
    "SearchKey"?: string;
}
