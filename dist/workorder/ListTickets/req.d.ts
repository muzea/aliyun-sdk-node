export interface ListTicketsRequest {
    /**
     * 工单创建时间, 配合EndDate使用, 用于查询在指定的开始和结束时间范围内创建的工单
     * @example `1623396736000`
     */
    "StartDate"?: number;
    /**
     * 工单创建截止时间, 配合StartDate使用, 用于查询在指定的开始和结束时间范围内提交的工单
     * @example `1623396736000`
     */
    "EndDate"?: number;
    /**
     * 分页查询页码参数
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页查询条数参数
     * @example `10`
     */
    "PageSize": number;
    /**
     * 工单编号
     * @example `0005PYGCW`
     */
    "TicketId"?: string;
    /**
     * 工单关键词, 用于模糊搜索匹配工单创建时的Description字段的内容
     * @example `ecs`
     */
    "Keyword"?: string;
    /**
     * 多个工单状态
     * @example `6`
     */
    "StatusList"?: string[];
    /**
     * 多个工单编号
     */
    "TicketIdList"?: string[];
    /**
     * UID
     * @example `1902070573958003`
     */
    "Uid"?: string;
}
