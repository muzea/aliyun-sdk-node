export interface ListNodeTransferPacketsRequest {
    /**
     * 根据**DevEUI**参数过滤数据包。
     * @example `0000000000000001`
     */
    "DevEui": string;
    /**
     * 数据包分类，可取值为：
     * - **DOWNLINK_PACKET**：下行包。
     * - **UPLINK_PACKET**：上行包。
     * - **INVALID_PACKET**：无效包。
     * @example `DOWNLINK_PACKET`
     */
    "Category": string;
    /**
     * 根据**GwEUI**参数过滤数据包。
     * @example `0000000000000001`
     */
    "GwEui"?: string;
    /**
     * 分页页码，从1开始。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，需大于等于1。
     * @example `2`
     */
    "PageSize": number;
    /**
     * 查询开始时间，单位为毫秒的UNIX时间戳。
     * @example `1514736000000`
     */
    "BeginMillis": number;
    /**
     * 查询结束时间，单位为毫秒的**UNIX**时间戳。
     * @example `1514736000000`
     */
    "EndMillis": number;
    /**
     * 排序字段，可设置为**LOG_MILLIS**（按照时间排序）。
     * @example `LOG_MILLIS`
     */
    "SortingField"?: string;
    /**
     * 需配合**SortingField**参数一起使用。
     * - **true**：表示升序。
     * - **false**：表示降序（默认值）。
     * @example `true`
     */
    "Ascending"?: boolean;
}
