export interface ListGatewayOnlineRecordsRequest {
    /**
     * 网关的GwEUI。
     * @example `0000000000000000`
     */
    "GwEui": string;
    /**
     * 查询的起始位置，从0开始的偏移值。
     * @example `0`
     */
    "OffSet": number;
    /**
     * 查询的记录数量上限，大于等于1。
     * @example `5`
     */
    "Limit": number;
    /**
     * 排序字段，可选值为：**STATE_CHANGED_MILLIS**，表示按照状态改变时间排序。
     * @example `STATE_CHANGED_MILLIS`
     */
    "SortingField"?: string;
    /**
     * 配合**SortingField**参数一起使用，**true**表示升序，**false**表示降序。
     * @example `true`
     */
    "Ascending"?: boolean;
}
