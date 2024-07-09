export interface QueryEdgeInstanceHistoricDeploymentRequest {
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
     * 从返回结果中的第几页开始显示。最小取值为1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 返回结果中每页显示的记录数量。最大取值30，最小取值1，默认取值是10。
     * @example `15`
     */
    "PageSize": number;
    /**
     * 查询起始时间。如果不传入起止时间，则查询该实例的全部历史部署记录。
     * @example `1558951998639`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间。如果不传入起止时间，则查询该实例的全部历史部署记录。
     * @example `1561543998639`
     */
    "EndTime"?: number;
}
