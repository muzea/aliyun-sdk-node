export interface SetEdgeInstanceDriverConfigsRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 边缘实例的ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**边缘实例**页面中，鼠标悬浮在目标边缘实例名称上获取ID。
     * 您也可以调用[QueryEdgeInstance](~~135214~~)接口获取。
     * @example `F3APY0tPLhmgGtx0****`
     */
    "InstanceId": string;
    /**
     * 驱动ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**驱动管理**页面中，鼠标悬浮在目标驱动名称上获取ID。
     * 您也可以调用[QueryEdgeDriver](~~155776~~)接口获取。
     * @example `021d154d2a2f4dd7a489773d9e04****`
     */
    "DriverId": string;
    /**
     * 配置列表。
     */
    "Configs": {
        /**
         * 配置的关键字。在有多个配置的情况下，用于区分配置。
         * @example `key1`
         */
        Key: string;
        /**
         * 配置文件格式。取值有KV（键值对配置）、JSON（JSON格式）、FILE（配置文件）。
         * @example `JSON`
         */
        Format: string;
        /**
         * 配置内容，可以选择传入：
         * - 配置内容文本。格式请参见[驱动与设备信息配置](~~120906~~)内容。
         * - 存储配置文件的阿里云对象存储（OSS）地址。
         * @example `{"test":123}`
         */
        Content: string;
    }[];
}
