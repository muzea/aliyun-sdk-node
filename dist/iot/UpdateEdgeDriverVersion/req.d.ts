export interface UpdateEdgeDriverVersionRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 驱动ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**驱动管理**页面中，鼠标悬浮在目标驱动名称上获取ID。
     * 您也可以调用[QueryEdgeDriver](~~155776~~)接口获取。
     * @example `fec565038d7544978d9aed5c1a******`
     */
    "DriverId": string;
    /**
     * 驱动版本号。
     * @example `1.2.0`
     */
    "DriverVersion": string;
    /**
     * 驱动适配的边缘版本，即该驱动只能在该边缘版本及以上版本的网关中运行。例如2.4.0，表示在v2.4.0及以上的边缘版本中运行该驱动。
     * @example `2.0.0`
     */
    "EdgeVersion": string;
    /**
     * 驱动描述。长度不超过256个字节。
     * @example `Led驱动（更新描述）`
     */
    "Description"?: string;
    /**
     * 驱动代码来源配置。JSON格式字符串，格式如下：
     * ` {"ossAddress":"http://***​/driver_code.zip"}`
     * 其中，`ossAddress`为对象存储（OSS）访问地址，如需通过API的方式上传驱动代码并获取OSS地址，请调用[CreateOssPreSignedAddress](~~155858~~)接口获取。
     * @example `{"ossAddress":"http://nova-scene-daily.oss-cn-shanghai.aliyuncs.com/driver/a8d6e4acc6941ecea8f0cfb30c******​/ck3n3koe200003h6zf******.zip"}`
     */
    "SourceConfig"?: string;
    /**
     * 驱动配置。JSON格式字符串，格式如下：
     * `{"format":"JSON","content":"{}"}`
     * 参数说明如下所示。
     * - format：配置格式。取值有KV（键值对配置）、JSON（JSON格式）、FILE（配置文件）。
     * - content：配置内容。format为KV或JSON时，请填配置内容；format为FILE时，请填OSS地址。
     *     > OSS地址请调用[CreateOssPreSignedAddress](~~155858~~)接口获取。
     * @example `[{"format":"JSON","content":"{\"defaultConfig\":\"this is default driver config demo\"}"}]`
     */
    "DriverConfig"?: string;
    /**
     * 容器配置。JSON格式字符串。更多信息，请参见本文下方ContainerConfig表格。
     * @example `{"privileged":1,"devMappings":[],"volumeMappings":[],"hostNetworkMode":0,"portMappings":[]}`
     */
    "ContainerConfig"?: string;
    /**
     * 配置校验规则。JSON格式字符串，格式如下：
     * `{"deviceConfig":{"required":false},"driverConfig":{"required":false}`
     * 参数说明如下。
     * - driverConfig：表示边缘实例中该驱动的配置校验规则。
     * - deviceConfig：表示边缘实例中该驱动下设备的配置校验规则。
     * `required`为true表示参数不能为空；false表示参数允许为空。
     * @example `{"deviceConfig":{"required":false},"driverConfig":{"required":false}}`
     */
    "ConfigCheckRule"?: string;
    /**
     * JVM（Java Virtual Machine）启动参数。
     * @example `-XX:+PrintGCDetails`
     */
    "Argument"?: string;
}
