export interface ListNotificationsRequest {
    /**
     * 通知类型列表，传 null 则不过滤类型。
     * @example `GATEWAY_OFFLINE`
     */
    "Category"?: string[];
    /**
     * 根据通知处理状态过滤，传**null**则不过滤处理状态。
     * - **HANDLED**：已处理。
     * - **UNHANDLED**：未处理。
     * @example `HANDLED`
     */
    "HandleState"?: string;
    /**
     * 查询的起始位置，需从0开始。
     * @example `0`
     */
    "Offset": number;
    /**
     * 查询的通知数量上限，需大于等于1。
     * @example `2`
     */
    "Limit": number;
    /**
     * 开始时间查询，毫秒为单位的UNIX时间戳。
     * @example `1514736000000`
     */
    "BeginMillis"?: number;
    /**
     * 结束时间查询，毫秒为单位的UNIX时间戳。
     * @example `1514736000000`
     */
    "EndMillis"?: number;
    /**
     * 排序字段，可取值为**NOTICE_MILLIS**（按照通知发生时间排序）。
     * @example `NOTICE_MILLIS`
     */
    "SortingField"?: string;
    /**
     * 配合**SortingField**参数一起使用。
     * - **true**：表示升序。
     * - **false**：表示降序。
     * @example `false`
     */
    "Ascending"?: boolean;
}
