export interface ListIoTCloudConnectorAvailableZonesResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    IoTCloudConnectorId: string;
    /**
     * 支持的可用区列表。
     */
    AvailableZoneList: string[];
}
