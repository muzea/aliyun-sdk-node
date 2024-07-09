export interface ListNodeTransferPacketPathsRequest {
    "IotInstanceId"?: string;
    /**
     * 根据DevEUI过滤数据包。
     * @example `0000000000000001`
     */
    "DevEui": string;
    /**
     * 数据包的MacPayload，由**ListNodeGroupTransferPackets**接口的返回值获取。
     * @example `xxx`
     */
    "Base64EncodedMacPayload": string;
    /**
     * 收到此数据包的时间，由ListNodeGroupTransferPackets的返回值获取。
     * @example `14643600000`
     */
    "LogMillis": number;
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
}
