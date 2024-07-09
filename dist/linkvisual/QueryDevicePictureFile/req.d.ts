export interface QueryDevicePictureFileRequest {
    /**
     * IPC设备所属产品的ProductKey。
     * 您可以在物联网平台控制台**产品**页查看或调用[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * IPC设备的设备名称。
     * 您可以在物联网平台控制台的**设备**页查看**DeviceName**。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `camera1`
     */
    "DeviceName"?: string;
    /**
     * IPC设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * ><notice> 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**的组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**的组合，则以**IotId**为准。
     * ></notice>
     * @example `zLZyi6aOLyOSHa9hsPyD00****`
     */
    "IotId"?: string;
    /**
     * 抓图事件发生时，生成的图片ID：
     * - 主动触发抓图时，图片ID请参见[TriggerCapturePicture](~~107914~~)。
     * - 智能告警事件触发抓图时，图片ID请参见[QueryDeviceEvent](~~107916~~)。
     * @example `fdc576d03c094faea9fa10fbf48c****`
     */
    "CaptureId": string;
    /**
     * 指定目标缩放图的宽度，单位为px，取值范围为1~4096。
     * @example `100`
     */
    "ThumbWidth"?: number;
    /**
     * 图片URL的失效时间，单位为分钟，取值范围为1~43200。
     * @example `60`
     */
    "ExpireTime"?: number;
    /**
     * 图片类型：
     * - **0**：缩略图
     * - **1**：原图
     * - **2**（默认）：全部
     * @example `1`
     */
    "PictureType"?: number;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-n6w1y******`
     */
    "IotInstanceId"?: string;
}
