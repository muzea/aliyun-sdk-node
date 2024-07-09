export interface BindDriverToEdgeInstanceRequest {
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
     * @example `9c1ae7bd59f1469abbdccc959228****`
     */
    "DriverId": string;
    /**
     * 驱动版本号。为空则默认为最新版本驱动。
     * @example `2.0.0`
     */
    "DriverVersion"?: string;
    /**
     * 订单编号。
     * > 当驱动为已购驱动时必填；驱动为官方驱动或自研驱动时不需要填写。
     * @example `11123458765****`
     */
    "OrderId"?: string;
}
