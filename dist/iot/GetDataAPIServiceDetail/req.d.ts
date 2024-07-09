export interface GetDataAPIServiceDetailRequest {
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
