export interface GetNodeTransferPacketsDownloadUrlRequest {
    /**
     * 根据 GwEUI 过滤数据包。
     * @example `0000000000000001`
     */
    "GwEui"?: string;
    /**
     * 根据 DevEUI 过滤数据包。
     * @example `0000000000000001`
     */
    "DevEui": string;
    /**
     * 数据包分类，可选：DOWNLINK_PACKET（下行包）、UPLINK_PACKET（上行包）、INVALID_PACKET（无效包）。
     * @example `DOWNLINK_PACKET`
     */
    "Category": string;
    /**
     * 查询开始时间，毫秒为单位的 UNIX 时间戳。
     * @example `1514736000000`
     */
    "BeginMillis": number;
    /**
     * 查询结束时间，毫秒为单位的 UNIX 时间戳。
     * @example `1514736000000`
     */
    "EndMillis": number;
    /**
     * 排序字段，可选 LOG_MILLIS（按照时间排序）。
     * @example `LOG_MILLIS`
     */
    "SortingField"?: string;
    /**
     * 配合 SortingField 参数一起使用，true 表示升序，false 表示降序。
     * 默认降序。
     * @example `true`
     */
    "Ascending"?: boolean;
}
