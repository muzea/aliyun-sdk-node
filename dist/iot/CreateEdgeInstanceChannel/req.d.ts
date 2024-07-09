export interface CreateEdgeInstanceChannelRequest {
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
     * 驱动通道名称。支持中文、英文大小写字母、数字和下划线（_），长度限制1~30个字符。
     * @example `le_name0`
     */
    "ChannelName": string;
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
         * 配置格式。取值有KV（键值对配置）、JSON（JSON格式）、FILE（配置文件）。
         * @example `JSON`
         */
        Format: string;
        /**
         * 配置内容。
         * - **Configs.N.Format**参数的值为KV或JSON时，此处请填写配置内容。配置内容格式，请参见[驱动通道配置说明](~~172321~~)。
         * - **Configs.N.Format**参数的值为FILE时，此处请填写阿里云对象存储OSS地址。OSS地址请调用[CreateOssPreSignedAddress](~~155858~~)接口获取。
         * @example `{"protocol":"TCP", "ip":"1.2.3.4", "port":1}`
         */
        Content: string;
    }[];
}
