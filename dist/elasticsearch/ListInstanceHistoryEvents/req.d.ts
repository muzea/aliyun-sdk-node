export interface ListInstanceHistoryEventsRequest {
    /**
     * 实例ID。
     * @example `es-cn-2r42l7a740005****`
     */
    "instanceId"?: string;
    /**
     * 触发事件的节点的IP地址。
     * @example `10.1.xx.xx`
     */
    "nodeIP"?: string;
    /**
     * 事件类型。
     */
    "eventType"?: string[];
    /**
     * 事件等级。
     */
    "eventLevel"?: string[];
    /**
     * 按照事件创建时间查询，起始时间。采用时间戳形式，单位为毫秒。
     * @example `1645596516000`
     */
    "eventCreateStartTime"?: string;
    /**
     * 按照事件创建时间查询，结束时间。采用时间戳形式，单位为毫秒。
     * @example `1645596516000`
     */
    "eventCreateEndTime"?: string;
    /**
     * 按照事件执行时间查询，起始时间。采用时间戳形式，单位为毫秒。
     * @example `1645596516000`
     */
    "eventExecuteStartTime"?: string;
    /**
     * 按照事件执行时间查询，结束时间。采用时间戳形式，单位为毫秒。
     * @example `1645596516000`
     */
    "eventExecuteEndTime"?: string;
    /**
     * 按照事件完成时间查询，起始时间。采用时间戳形式，单位为毫秒。
     * @example `1645596516000`
     */
    "eventFinashStartTime"?: string;
    /**
     * 按照事件完成时间查询，结束时间。采用时间戳形式，单位为毫秒。
     * @example `1645596516000`
     */
    "eventFinashEndTime"?: string;
    /**
     * 起始文档偏移量。需要为非负数，默认为0。
     * @example `0`
     */
    "page"?: number;
    /**
     * 要返回的事件数量。需要为非负数，默认为10。
     * @example `10`
     */
    "size"?: number;
    /**
     * 事件的生命周期状态对象。
     */
    "eventCycleStatus"?: string[];
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 返回结果按照哪个字段排序，可选值如下：
         * - event_time：事件创建时间
         * - event_execute_start_time：事件执行时间
         * - event_execute_finish_time：事件完成时间
         * @example `event_time`
         */
        sortField: string;
        /**
         * 是否倒序：
         * - true（默认）：是
         * - false：否
         * @example `true`
         */
        desc: boolean;
    }[];
}
