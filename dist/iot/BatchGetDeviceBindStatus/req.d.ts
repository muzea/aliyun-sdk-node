export interface BatchGetDeviceBindStatusRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 设备ID列表。可调用[QueryDevice](~~69905~~)接口查询设备ID。
     * > 单次调用最多可填写20个设备ID。
     * @example `sjI0Sd124XFYyjBYMiYO******`
     */
    "IotIds": string[];
}
