export interface DeleteEdgeInstanceMessageRoutingRequest {
    /**
     * 物联网平台的实例ID：
     * - 企业版实例：必须传入此参数。您可在[物联网平台控制台](http://iot.console.aliyun.com/)的**实例概览**页面，查看您的企业版实例ID。
     * - 公共实例：无需传入此参数。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 边缘实例ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**边缘实例**页面中，鼠标指针悬浮在目标边缘实例名称上获取ID。
     * @example `5zvK1COK1gtr********`
     */
    "InstanceId": string;
    /**
     * 消息路由的ID。您可以调用[QueryEdgeInstanceMessageRouting](~~212633~~)接口获取。
     * @example `123456`
     */
    "RouteId": number;
}
