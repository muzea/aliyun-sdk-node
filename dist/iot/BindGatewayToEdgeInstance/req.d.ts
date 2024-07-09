export interface BindGatewayToEdgeInstanceRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 边缘实例ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**边缘实例**页面中，鼠标悬浮在目标边缘实例名称上获取ID。
     * 您也可以调用[QueryEdgeInstance](~~135214~~)接口获取。
     * @example `F3APY0tPLhmgGtx0****`
     */
    "InstanceId": string;
    /**
     * 网关所属产品的Key，产品的唯一标识符。
     * > 如果传入此参数，需同时传入**DeviceName**。
     * @example `a1mAdeG****`
     */
    "ProductKey"?: string;
    /**
     * 网关设备名称。
     * > 如果传入此参数，需同时传入**ProductKey**。
     * @example `device1`
     */
    "DeviceName"?: string;
    /**
     * 网关设备的ID，物联网平台为设备生成的唯一标识符，与**ProductKey**和**DeviceName**组合一一对应。
     * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**；如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `4z819VQHk6VSLmmBJfrf0010******`
     */
    "IotId"?: string;
}
