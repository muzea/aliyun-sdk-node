export interface QueryStreamPushJobListRequest {
    /**
     * 指定返回结果中每页显示的记录数量，最大值是100，默认值是10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 设备所属产品的**ProductKey**。
     * 您可以在物联网平台控制台**产品**页查看或调用[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 设备的设备名称。
     * 您可以在物联网平台控制台的**设备**页查看**DeviceName**。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `camera1`
     */
    "DeviceName"?: string;
    /**
     * 设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * ><notice> **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `d7XmBoJhAr88C6PelXDF00****`
     */
    "IotId"?: string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页签，查看当前实例的ID。
     * @example `iot-cn-n6w1y59****`
     */
    "IotInstanceId": string;
    /**
     * 指定显示返回结果中的第几页的内容。默认值是起始页码1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 推流任务类型。
     * - **1**（默认）：持续型任务。
     * - **2**：触发式任务，中断后结束。
     * @example `1`
     */
    "JobType"?: number;
}
