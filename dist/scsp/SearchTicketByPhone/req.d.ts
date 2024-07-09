export interface SearchTicketByPhoneRequest {
    /**
     * 客户请求唯一id，用于幂等校验，可以用uuid生成
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 电话
     * @example `138999`
     */
    "Phone": string;
    /**
     * 工单模板id
     * @example `546754`
     */
    "TemplateId"?: number;
    /**
     * 工单状态
     * @example `6`
     */
    "TicketStatus"?: string;
    /**
     * 当前页（默认为1）
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小（默认为10）
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 开始时间
     * @example `1614824872`
     */
    "StartTime"?: number;
    /**
     * 结束时间
     * @example `1614825972`
     */
    "EndTime"?: number;
}
