export interface InvokeDataAPIServiceRequest {
    /**
     * 参数列表。
     */
    "Param"?: {
        /**
         * 调用API的入参参数名称。必须与调用**CreateDataAPIService**接口创建API时，**RequestParam**中定义的**Name**保持一致。
         * @example `status`
         */
        ParamName: string;
        /**
         * 数据类型。目前只支持VARCHAR、INTEGER、BOOLEAN、BIGING、TIMESTAMP、DECIMAL和ARRAY类型。
         * > 当paramType选择ARRAY时，ListParamType和ListParamValue参数会生效；paramType为其他类型时，paramValue参数会生效。
         * @example `VARCHAR `
         */
        ParamType: string;
        /**
         * ARRAY类型的参数值的数据类型。请参见[JDBCType](https://docs.oracle.com/javase/8/docs/api/java/sql/JDBCType.html)。
         * 目前仅支持VARCHAR、INTEGER、BIGINT、BOOLEAN、DECIMAL、TIMESTAMP。
         * @example `VARCHAR`
         */
        ListParamType: string;
        /**
         * 调用API的入参参数值。
         * - 统一使用String类型存储，物联网平台会根据创建API时定义的**ParamType**转换成JDBC类型对象。
         * - 创建API时，如果API请求参数类型**Type**定义为ARRAY类型，则不传入该参数，而需传入**ListParamType**和**ListParamValue**。
         * @example `1`
         */
        ParamValue: string;
        /**
         * ARRAY类型的参数值列表。数组中只能放置一组类型相同的数据，例如放置数值类型数据，则全部数据为数值类型。
         * > 统一使用String类型存储，平台会跟据ListParamType对应的值转换成JDBC类型对象。
         * @example `["1","2","3"]`
         */
        ListParamValue: string[];
    }[];
    /**
     * API资源标识符，API的全局唯一标识。 调用**CreateDataAPIService**接口成功创建API，返回的ApiSrn值。
     * 格式：`acs:iot:*:${aliyunuserID}:serveapi/${ApiPath}`
     * 示例：`acs:iot:*:127103983461****:serveapi/device/getDeviceCountByStatus2`
     * 以上示例中的信息说明如下：
     * - `127103983461****`是阿里云主账号ID。
     * - `/device/getDeviceCountByStatus`是请求参数ApiPath的值，即API调用地址的自定义部分。
     * @example `acs:iot:*:127103983461****:serveapi/device/getDeviceCountByStatus2`
     */
    "ApiSrn": string;
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
}
