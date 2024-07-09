export interface UpdateServiceAttributeRequest {
    /**
     * 系统为分应用统计服务生成的ID，全网唯一。
     * @example `c910061f-****-44e6-b659-***c`
     */
    "ServiceId": string;
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 分应用统计服务的名称。
     * 长度为2~128个英文或中文字符，开头必须为大小写英文字母或中文，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `service_name`
     */
    "ServiceName"?: string;
    /**
     * 分应用统计服务的描述。
     * 长度为2~256个字符，开头必须为大小写英文字母或中文，但不能为`http://`或`https://`。
     * @example `service_description`
     */
    "ServiceDescription"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会修改服务。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接修改服务。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 分应用统计服务所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
