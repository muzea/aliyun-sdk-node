export interface ImportDTDataRequest {
    /**
     * 设备所属产品的**ProductKey**。
     * @example `dgb9****`
     */
    "ProductKey": string;
    "DTInstanceId": string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-****001`
     */
    "IotInstanceId"?: string;
    /**
     * 触发数据映射的设备信息列表。
     */
    "Items": {
        /**
         * 设备数据源，格式为`Key:Value`的JSON字符串。
         * 单次调用本接口，最多传入300个键值对。
         * @example `{"key1":12,"key2":56}`
         */
        Params: string;
        /**
         * 设备名称。单次调用接口下，最多传入5个。
         * @example `Device1`
         */
        DeviceName: string;
    }[];
}
