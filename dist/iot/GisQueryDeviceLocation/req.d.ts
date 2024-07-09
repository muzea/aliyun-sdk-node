export interface GisQueryDeviceLocationRequest {
    /**
     * 设备列表。
     */
    "ThingList": {
        /**
         * 要查询设备所属产品的ProductKey列表。
         * ProductKey是物联网平台为新建产品颁发的全局唯一标识符。您可以在物联网平台控制台或调用[QueryProductList](~~69271~~)，查看当前账号下所有产品的信息。
         * ><notice>每个设备的 **ProductKey**与**DeviceName**必须同时传入，且设备个数不能超过20个。
         * ></notice>
         * @example `g3r****Vjta`
         */
        ProductKey: string;
        /**
         * 要查询的设备名列表。
         * ><notice>每个设备的 **ProductKey**与**DeviceName**必须同时传入，且设备个数不能超过20个。
         * ></notice>
         * @example `mock_device_name`
         */
        DeviceName: string;
    }[];
    /**
     * 实例ID。<props="china"><ph>您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。</ph></props>
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * <props="china">实例的更多信息，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot-a****13l`
     */
    "IotInstanceId"?: string;
}
