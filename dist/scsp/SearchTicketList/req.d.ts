export interface SearchTicketListRequest {
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
     * 工单操作人id
     * @example `555555`
     */
    "OperatorId": number;
    /**
     * 工单状态（工单状态数值）
     * **说明：工单类型定义时需要自定义状态数值，例如配送员待处理的状态数值需手动改为3807且在工单创建前修改完成，工单状态的查询条件才可能生效。如下图：（该图复制链接下载后即可查看）**
     * https://cdn.nlark.com/yuque/0/2020/png/2733660/1608724297862-da5150ed-71f0-47a5-8de4-c371cda23b97.png
     * @example `6`
     */
    "TicketStatus"?: string;
    /**
     * 当前页（默认为1）
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小（默认为20）
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 开始时间戳（毫秒）
     * @example `1614824872`
     */
    "StartTime"?: number;
    /**
     * 结束时间戳（毫秒）
     * @example `1614825972`
     */
    "EndTime"?: number;
}
