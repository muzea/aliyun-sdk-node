export interface BatchBindDeviceToEdgeInstanceWithDriverRequest {
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
     * 驱动ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**驱动管理**页面中，鼠标悬浮在目标驱动名称上获取ID。
     * 您也可以调用[QueryEdgeDriver](~~155776~~)接口获取。
     * @example `021d154d2a2f4dd7a489773d9e04****`
     */
    "DriverId": string;
    /**
     * 设备ID列表。
     * 可调用[QueryDevice](~~69905~~)查询当前账号下所有设备信息，获取设备IotId。
     * > 单次调用最多可绑定20个设备。
     * @example `BXPV9Ks3bxwM9fD****0000101`
     */
    "IotIds": string[];
}
