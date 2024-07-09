export interface GetNodeGroupTransferPacketsDownloadUrlRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-***-v6***`
     */
    "IotInstanceId"?: string;
    /**
     * 节点分组ID。
     * @example `123`
     */
    "NodeGroupId": string;
    /**
     * 根据DevEUI过滤数据包。
     * @example `0000000000000001`
     */
    "DevEui"?: string;
    /**
     * 数据包分类。取值：
     * - **DOWNLINK_PACKET**：下行包。
     * - **UPLINK_PACKET**：上行包。
     * @example `DOWNLINK_PACKET`
     */
    "Category": string;
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
     * 排序字段。取值：**LOG_MILLIS**，表示按照时间排序。
     * @example `LOG_MILLIS`
     */
    "SortingField"?: string;
    /**
     * 需配合**SortingField**参数一起使用。
     * - **true**：升序。
     * - **false**：降序。
     * @example `true`
     */
    "Ascending"?: boolean;
}
