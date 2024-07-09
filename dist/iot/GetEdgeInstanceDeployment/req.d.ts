export interface GetEdgeInstanceDeploymentRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 边缘实例ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**边缘实例**页面中，鼠标悬浮在目标边缘实例名称上获取ID。
     * 您也可以调用[QueryEdgeInstance](~~135214~~)接口获取。
     * @example `PgEfYupSn6Pvhfkx****`
     */
    "InstanceId": string;
    /**
     * 部署单ID。可调用[QueryEdgeInstanceHistoricDeployment](~~135275~~)接口获取。
     * @example `9261e308a9504fde9b4cf8462b0b****`
     */
    "DeploymentId": string;
}
