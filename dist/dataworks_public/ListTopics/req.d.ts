export interface ListTopicsRequest {
    /**
     * 起始发现时间，需要使用UTC格式（yyyy-MM-dd'T'HH:mm:ssZ）。
     * @example `2019-03-24T00:00:00+0800`
     */
    "BeginTime": string;
    /**
     * 截止发现时间，需要使用UTC格式（yyyy-MM-dd'T'HH:mm:ssZ）。
     * @example `2019-03-25T23:00:00+0800`
     */
    "EndTime": string;
    /**
     * 事件的类型，包括SLOW（变慢）和ERROR（出错）。多个事件类型之间使用英文逗号（,）分隔。
     * @example `ERROR,SLOW`
     */
    "TopicTypes"?: string;
    /**
     * 事件的状态，包括IGNORE（已忽略）、NEW（新发现）、FIXING（处理中）和RECOVER（已恢复）。多个事件状态之间使用英文逗号（,）分隔。
     * @example `IGNORE,NEW,FIXING,RECOVER`
     */
    "TopicStatuses"?: string;
    /**
     * 事件关联的任务节点ID，与参数InstanceId互斥。
     * @example `1234`
     */
    "NodeId"?: number;
    /**
     * 事件关联的实例ID，与参数NodeId互斥。
     * @example `12345`
     */
    "InstanceId"?: number;
    /**
     * 事件责任人的阿里云UID。
     * @example `952795****`
     */
    "Owner"?: string;
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
}
