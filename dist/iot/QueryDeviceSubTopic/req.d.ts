export interface QueryDeviceSubTopicRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 要查询设备所属产品的ProductKey。
     * 您可以在物联网平台控制台或调用[QueryProductList](~~69271~~)查看产品的信息。
     * @example `hf768****`
     */
    "ProductKey": string;
    /**
     * 要查询设备的设备名称。
     * 您可以在物联网平台控制台或调用[QueryDeviceInfo](~~257184~~)查看设备的信息。
     * @example `device1`
     */
    "DeviceName": string;
}
