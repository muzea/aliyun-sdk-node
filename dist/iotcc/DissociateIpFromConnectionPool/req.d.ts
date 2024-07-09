export interface DissociateIpFromConnectionPoolRequest {
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会解除IP地址与云连接器关联的连接地址池的绑定关系。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接解除IP地址与云连接器关联的连接地址池的绑定关系。
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
     * 连接地址池ID。
     * @example `cp-bp11234abctmno0hdq****`
     */
    "ConnectionPoolId": string;
    /**
     * 要解除绑定的IP地址列表。
     * 最多支持传入500个IP地址。多个IP地址使用半角逗号（,）分隔。
     */
    "Ips"?: string[];
    /**
     * 模板文件OSS地址，即[GetStsInfoAndOssPath](~~313331~~)接口的返回参数**OssPath**。
     * 格式为`<BucketName>/<uid>/<FileName>`。
     * **Ips**和**IpsFilePath**不能同时填写，如果IP数量较少，可直接选择**Ips**方式，如果IP数量较多，建议选择**IpsFilePath**方式，将需要解绑的IP地址记录在模板文件中，整体解绑。
     * @example `cciot-cn-hangzhou/127859184306****​/test.csv`
     */
    "IpsFilePath"?: string;
}
