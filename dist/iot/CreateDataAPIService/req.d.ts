export interface CreateDataAPIServiceRequest {
    /**
     * 请求参数列表。
     */
    "RequestParam"?: {
        /**
         * 参数类型，请参见[JDBCType](https://docs.oracle.com/javase/8/docs/api/java/sql/JDBCType.html)。目前仅支持：ARRAY、VARCHAR、INTEGER、BIGINT、BOOLEAN、DECIMAL、TIMESTAMP。
         * @example `VARCHAR`
         */
        Type: string;
        /**
         * 该参数是否必填。
         * - true：必填。
         * - false：非必填。
         * 默认值为true。
         * @example `true`
         */
        Required: boolean;
        /**
         * 参数值示例。
         * @example `dksiaiek23s`
         */
        Example: string;
        /**
         * 参数名称。
         * 例如，`${status}`格式的模板参数，参数名称就是`status`。
         * @example `status`
         */
        Name: string;
        /**
         * 参数描述。
         * @example `设备状态`
         */
        Desc: string;
    }[];
    /**
     * 响应参数列表。
     */
    "ResponseParam"?: {
        /**
         * 参数类型，请参见[JDBCType](https://docs.oracle.com/javase/8/docs/api/java/sql/JDBCType.html)。目前仅支持：VARCHAR、INTEGER、BIGINT、BOOLEAN、DECIMAL、TIMESTAMP。
         * @example `INTEGER`
         */
        Type: string;
        /**
         * 该参数是否必填。
         * - true：必填。
         * - false：非必填。
         * > 返回参数中，此参数无需处理。
         * @example `true`
         */
        Required: boolean;
        /**
         * 参数值示例。
         * @example `100`
         */
        Example: string;
        /**
         * 参数名称。
         * @example `deviceCount`
         */
        Name: string;
        /**
         * 参数描述。
         * @example `设备总数`
         */
        Desc: string;
    }[];
    /**
     * API的显示名称，需具有全局唯一性。仅支持中文汉字、英文字母、数字、下划线（_）、连接符（-）、英文圆括号和空格，长度不超过20个字符。
     * @example `查询设备总数`
     */
    "DisplayName": string;
    /**
     * API对应的原始SQL，指定数据开发的SQL样式。
     * 例如`select count(*) as deviceCount from ${system.device} where status = 1`。其中，`${system.device}`是平台系统的设备表，具体请参见[数据表](~~120902~~)中的表说明。
     * @example `SELECT COUNT(iot_id) AS deviceCount FROM ${system.device} WHERE status=1`
     */
    "OriginSql": string;
    /**
     * API的描述。
     * @example `数据分析API`
     */
    "Desc"?: string;
    /**
     * 服务的模板SQL，即原始SQL的模板化。
     * 例如`select count(*) as deviceCount from ${system.device} where status = ${status}`。其中，`${status}`是模板化的参数。支持设置模板参数为动态值。
     * @example `SELECT COUNT(iot_id) AS deviceCount FROM ${system.device} WHERE status=${status}`
     */
    "TemplateSql": string;
    /**
     * API调用地址的自定义部分。作为API资源标识符，需具有全局唯一性。
     * > API调用地址的前一段部分由系统生成。
     * @example `device/getDeviceCountByStatus`
     */
    "ApiPath": string;
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
}
