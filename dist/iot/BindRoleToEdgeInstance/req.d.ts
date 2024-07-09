export interface BindRoleToEdgeInstanceRequest {
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
     * 授权角色的全局资源描述符（ARN）。在[RAM控制台](https://ram.console.aliyun.com/)创建角色后，单击角色名，可在**基本信息**页查看其ARN。
     * @example `acs:ram::176********:role/iotedgerole`
     */
    "RoleArn": string;
    /**
     * 角色名称。
     * @example `IoTEdgeRole`
     */
    "RoleName": string;
}
