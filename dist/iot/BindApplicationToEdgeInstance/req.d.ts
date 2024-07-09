export interface BindApplicationToEdgeInstanceRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 边缘实例的ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**边缘实例**页面中，鼠标悬浮在目标边缘实例名称上获取ID。
     * 您也可以调用[QueryEdgeInstance](~~135214~~)接口获取。
     * @example `Tb4r9k3GWHJFWv******`
     */
    "InstanceId": string;
    /**
     * 边缘应用的ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**应用管理**页面中，鼠标悬浮在目标应用名称上获取ID。
     * @example `361368ba5a094da9bf5625d092******`
     */
    "ApplicationId": string;
    /**
     * 边缘应用的版本号。
     * @example `3.7`
     */
    "ApplicationVersion": string;
}
