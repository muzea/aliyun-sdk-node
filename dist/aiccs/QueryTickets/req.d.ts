export interface QueryTicketsRequest {
    /**
     * 实例ID。
     * 请登录[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)，在**实例管理**中查看实例ID。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 工单ID。
     * @example `223468****`
     */
    "CaseId"?: number;
    /**
     * 工单类型编号（系统自动分配）。
     * @example `1223`
     */
    "CaseType"?: number;
    /**
     * 工单状态编号。
     * @example `2`
     */
    "CaseStatus"?: number;
    /**
     * 工单模板ID。
     * @example `29506`
     */
    "SrType"?: number;
    /**
     * 任务状态。
     * @example `3`
     */
    "TaskStatus"?: number;
    /**
     * 渠道ID。
     * @example `02acfefd3fa14049826ac1a89e1xxxxx`
     */
    "ChannelId"?: string;
    /**
     * 渠道类型。取值：
     * - **0**：未填写
     * - **1**：热线
     * - **2**：在线
     * @example `1`
     */
    "ChannelType"?: number;
    /**
     * 接触ID。
     * @example `15030609`
     */
    "TouchId"?: number;
    /**
     * 处理人ID。
     * @example `123456`
     */
    "DealId"?: number;
    /**
     * 附加信息。
     * @example `无`
     */
    "Extra"?: any;
    /**
     * 页大小。默认值为：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 当前页。默认值：**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
}
