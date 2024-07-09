export interface GetEdgeDriverVersionResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `6ECE664B-E670-47BA-A6AD-62B9F35E3A7B`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 创建驱动的Unix时间戳。
         * @example `1581912859713`
         */
        GmtCreateTimestamp: number;
        /**
         * 配置校验规则。JSON格式字符串，格式如下：
         * `{"deviceConfig":{"required":false},"driverConfig":{"required":false}`
         * 参数说明如下。
         * - driverConfig：表示边缘实例中该驱动的配置校验规则。
         * - deviceConfig：表示边缘实例中该驱动下设备的配置校验规则。
         * @example `{\"deviceConfig\":{\"required\":false},\"driverConfig\":{\"required\":false}}`
         */
        ConfigCheckRule: string;
        /**
         * 驱动ID。
         * @example `fec565038d7544978d9aed5c1a******`
         */
        DriverId: string;
        /**
         * 驱动适配的边缘版本。
         * @example `2.0.0`
         */
        EdgeVersion: string;
        /**
         * 最后一次更新驱动的Unix时间戳。
         * @example `1581912859713`
         */
        GmtModifiedTimestamp: number;
        /**
         * 驱动版本状态。
         * - 0：表示该版本未发布。
         * - 1：表示该版本已发布。
         * @example `0`
         */
        VersionState: string;
        /**
         * 容器配置。JSON格式字符串，参数说明，请参见本文下方ContainerConfig表格。
         * @example `{\"devMappings\":[],\"hostNetworkMode\":0,\"portMappings\":[],\"privileged\":1,\"volumeMappings\":[]}`
         */
        ContainerConfig: string;
        /**
         * 驱动描述。
         * @example `Led驱动`
         */
        Description: string;
        /**
         * 驱动配置。JSON格式字符串，格式如下：
         * `{"format":"JSON","content":"{}"}`
         * 参数说明如下所示。
         * - format：配置格式。取值有KV（键值对配置）、JSON（JSON格式）、FILE（配置文件）。
         * - content：配置内容。format为KV或JSON时，此处为配置内容；format为FILE时，此处为OSS地址。
         * @example `[{\"content\":\"{\\\"defaultConfig\\\":\\\"this is default driver config demo\\\"}\",\"format\":\"JSON\"}]`
         */
        DriverConfig: string;
        /**
         * 驱动版本号。
         * @example `1.2.0`
         */
        DriverVersion: string;
        /**
         * JVM（Java Virtual Machine）启动参数。
         * @example `-XX:+PrintGCDetails`
         */
        Argument: string;
        /**
         * 驱动代码来源配置。JSON格式字符串，格式如下：
         * `{"ossAddress":"http://***​/driver_code.zip","temporaryOssAddress":"http://***​/driver_code.zip?Expires***"}`
         * 其中，`ossAddress`为对象存储（OSS）访问地址，`temporaryOssAddress`为可以直接下载的临时链接，有效期5分钟。
         * @example `{\"ossAddress\":\"http://nova-scene-daily.oss-cn-shanghai.aliyuncs.com/driver/a8d6e4acc6941ecea8f0cfb30******​/ck3n3koe200003h6zfg******.zip\",\"temporaryOssAddress\":\"http://nova-scene-daily.oss-cn-shanghai.aliyuncs.com/driver/a8d6e4acc6941ecea8f0cfb30******​/ck3n3koe200003h6zf******.zip?Expires\u003d1575******\u0026OSSAccessKeyId\u003daS4MT0IYrP******\u0026Signature\u003dm6cpmcaB8rm3YfbkhTYgb0******\"}`
         */
        SourceConfig: string;
    };
}
