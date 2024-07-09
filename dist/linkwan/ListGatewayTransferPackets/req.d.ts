export interface ListGatewayTransferPacketsRequest {
    /**
     * 物联网平台的实例id，为空表示公共实例。
     * @example `iotx-oxssh****`
     */
    "IotInstanceId"?: string;
    /**
     * 要查询的网关的GwEUI。
     * @example `0000000000000000`
     */
    "GwEui": string;
    /**
     * 根据DevEUI过滤数据包。
     * @example `0000000000000001`
     */
    "DevEui"?: string;
    /**
     * 数据包分类。
     * - DOWNLINK_PACKET：下行包。
     * - UPLINK_PACKET：上行包。
     * - INVALID_PACKET：无效包。
     * @example `DOWNLINK_PACKET`
     */
    "Category": string;
    /**
     * 分页页码，从1开始。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，大于等于1。
     * @example `2`
     */
    "PageSize": number;
    /**
     * 查询开始时间，毫秒为单位的UNIX时间戳。
     * @example `1514736000000`
     */
    "BeginMillis": number;
    /**
     * 查询结束时间，毫秒为单位的UNIX时间戳。
     * @example `1514736000000`
     */
    "EndMillis": number;
    /**
     * 排序字段，取值：**LOG_MILLIS**，表示按照时间排序。
     * @example `LOG_MILLIS`
     */
    "SortingField"?: string;
    /**
     * 配合**SortingField**参数一起使用，**true**表示升序，**false**表示降序。
     * @example `true`
     */
    "Ascending"?: boolean;
}
