export interface CreateSchemaSubscribeRequest {
    /**
     * 设备名称
     * @example `model_2nd`
     */
    "DeviceModel": string;
    /**
     * 订阅列表
     * @example `[{\"path\":\"/car_body_hvac/cooling/water_temperature\",\"description\":\"水温\",\"required\":false,\"type\":\"number\",\"minimum\":20,\"exclusiveMinimum\":false,\"maximum\":30,\"exclusiveMaximum\":false},{\"path\":\"/car_body_hvac/lubricating/oil_level\",\"description\":\"机油油位\",\"required\":false,\"type\":\"number\",\"minimum\":3,\"exclusiveMinimum\":false,\"maximum\":6,\"exclusiveMaximum\":false}]`
     */
    "SubscribeList"?: string;
    /**
     * 项目ID
     * @example `PIC3UA0V`
     */
    "ProjectId": string;
    /**
     * 版本
     * @example `1.0`
     */
    "SchemaVersion"?: string;
}
