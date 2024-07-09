export interface BatchGetEdgeInstanceChannelRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 边缘实例的ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**边缘实例**页面中，鼠标悬浮在目标边缘实例名称上获取ID。
     * 您也可以调用[QueryEdgeInstance](~~135214~~)接口获取。
     * @example `6GaTtvTj7vJhiS******`
     */
    "InstanceId": string;
    /**
     * 驱动ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**驱动管理**页面中，鼠标悬浮在目标驱动名称上获取ID。
     * 您也可以调用[QueryEdgeDriver](~~155776~~)接口获取。
     * @example `9c1ae7bd59f1469abbdccc9592******`
     */
    "DriverId": string;
    /**
     * 驱动通道ID列表。调用[QueryEdgeInstanceChannel](~~162253~~)接口获取通道ID。
     * > 单次调用最多可填写20个通道ID。
     * @example `BE0BD49EF5EF4D119D09CC1B25******`
     */
    "ChannelIds": string[];
}
