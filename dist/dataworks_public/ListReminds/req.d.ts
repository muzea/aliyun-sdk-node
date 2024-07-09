export interface ListRemindsRequest {
    /**
     * 分页的页数。默认值为1，最小值为1，最大值为30。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 创建人的阿里云UID。
     * @example `9527952795****`
     */
    "Founder"?: string;
    /**
     * 规则的对象，任务节点ID。您可以根据任务节点ID搜索覆盖该任务节点的自定义监控规则。
     * @example `1234`
     */
    "NodeId"?: number;
    /**
     * 触发条件，包括FINISHED（完成）、UNFINISHED（未完成）、ERROR（出错）、CYCLE_UNFINISHED（周期未完成）和TIMEOUT（运行超时）。多个触发条件之间使用英文逗号（,）分隔。
     * @example `FINISHED,ERROR`
     */
    "RemindTypes"?: string;
    /**
     * 报警接收人的阿里云UID。
     * @example `9527952795****`
     */
    "AlertTarget"?: string;
    /**
     * 搜索规则名称。
     * @example `模糊搜索规则名称`
     */
    "SearchText"?: string;
}
