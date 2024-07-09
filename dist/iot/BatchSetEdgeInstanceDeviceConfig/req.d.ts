export interface BatchSetEdgeInstanceDeviceConfigRequest {
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
     * 设备配置信息列表。
     */
    "DeviceConfigs": {
        /**
         * 配置内容，可以选择传入：
         * - 配置内容文本。格式请参见[设备配置说明](~~172319~~)。
         * - 存储配置文件的阿里云对象存储（OSS）地址。
         * > 单次调用最多可填写20个配置信息。
         * @example `{"test": "device_config_demo"}`
         */
        Content: string;
        /**
         * 设备ID。
         * 可调用[QueryEdgeInstanceDevice](~~135261~~)查询实例中的设备ID。
         * > 单次调用最多可填写20个设备ID。
         * @example `sjI0Sd124XFYyjBY****000101`
         */
        IotId: string;
    }[];
}
