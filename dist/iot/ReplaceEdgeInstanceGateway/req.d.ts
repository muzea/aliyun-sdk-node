export interface ReplaceEdgeInstanceGatewayRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 边缘实例的ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**边缘实例**页面中，鼠标悬浮在目标边缘实例名称上获取ID。
     * 您也可以调用[QueryEdgeInstance](~~135214~~)接口获取。
     * @example `G4TGWGYwpo8zwr******`
     */
    "InstanceId": string;
    /**
     * 当前网关设备的IotId。IotId是物联网平台为设备生成的唯一标识符。可调用[QueryDevice](~~69905~~)接口查询。
     * @example `oTCJomvT95WPyPPQ5sje******`
     */
    "CurrentGatewayId": string;
    /**
     * 要替换的新网关设备的IotId。IotId是物联网平台为设备生成的唯一标识符。可调用[QueryDevice](~~69905~~)接口查询。
     * @example `65SkFyhZcU5d3PO2Ri13******`
     */
    "NewGatewayId": string;
}
