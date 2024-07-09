export interface CreateLocalRecordDownloadByTimeJobRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页签，查看当前实例的ID。
     * @example `iot-******`
     */
    "IotInstanceId": string;
    /**
     * 视频设备所属产品的**ProductKey**。
     * 您可以在物联网平台控制台的**产品**页面或调用[QueryProductList](~~69271~~)接口，查看当前实例下所有产品的信息。
     * ><notice>如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1Bw******`
     */
    "ProductKey"?: string;
    /**
     * 视频设备的设备名称。您可以在物联网平台控制台的**设备**页面，或调用[QueryDevice](~~69905~~)接口查看指定产品下设备的**DeviceName**。
     * ><notice>如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `Device01`
     */
    "DeviceName"?: string;
    /**
     * 设备上传倍速。 默认值**1.0**，取值范围为**0.125**~**8.0**。
     * @example `1.0`
     */
    "Speed"?: number;
    /**
     * 开始时间，格式为10位的时间戳，单位为秒。取值范围0~2147483647。
     * @example `1900000000`
     */
    "BeginTime": number;
    /**
     * 视频设备的设备ID。可调用[QueryDeviceDetail](~~69594~~)接口查询。
     * ><notice>
     * **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `C47T6xwp6ms4bNlkHRWCg4****`
     */
    "IotId"?: string;
    /**
     * 结束时间，格式为10位的时间戳，单位为秒。取值范围为0~2147483647，必须大于开始时间**BeginTime**。
     * @example `2100000000`
     */
    "EndTime": number;
}
