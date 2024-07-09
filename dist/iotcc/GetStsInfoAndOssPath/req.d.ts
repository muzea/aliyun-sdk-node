export interface GetStsInfoAndOssPathRequest {
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会获取信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接获取信息。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 云连接器实例所在的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 连接地址池的ID。
     * @example `cp-bp11234abctmno0hdq****`
     */
    "ConnectionPoolId": string;
    /**
     * 模板文件名称。
     * 模板文件仅支持CSV格式。
     * @example `test.csv`
     */
    "FileName"?: string;
}
