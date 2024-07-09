export interface BatchImportVehicleDeviceRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-1n8t****`
     */
    "IotInstanceId": string;
    /**
     * 设备所属云网关产品的**ProductKey**。
     * @example `a1Bw****`
     */
    "ProductKey": string;
    "DeviceList": {
        DeviceName: string;
        DeviceId: string;
        DeviceSecret: string;
        DeviceModel: string;
        Manufacturer: string;
    }[];
}
