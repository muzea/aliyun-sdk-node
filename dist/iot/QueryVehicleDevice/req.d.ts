export interface QueryVehicleDeviceRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-2w****`
     */
    "IotInstanceId"?: string;
    /**
     * 设备所属云网关产品的**ProductKey**。
     * @example `a1Bw****`
     */
    "ProductKey"?: string;
    /**
     * 设备名称。
     * @example `light`
     */
    "DeviceName"?: string;
}
