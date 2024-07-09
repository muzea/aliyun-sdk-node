export interface AddShareTaskDeviceRequest {
    /**
     * 分享任务ID。
     * @example `Md3ZiTL888K9llXDy7890***********`
     */
    "ShareTaskId": string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 待添加设备所属产品的**ProductKey**。
     * 您可以在物联网平台控制台或调用接口[QueryProductList](~~69271~~)，查看当前实例下所有产品的信息。
     * @example `a2YwD23***`
     */
    "ProductKey"?: string;
    /**
     * 待添加的设备列表，需传入设备对应的**IotId**，该参数可以通过调用[QueryDevice](~~69905~~)获取。
     * >如果传入该参数，则无需传入**ProductKey**。如果您同时传入**IotIdList**和**ProductKey**，则以**IotIdList**为准。
     * @example `y4u2weAIrpp****WHMle1234	`
     */
    "IotIdList"?: string[];
}
