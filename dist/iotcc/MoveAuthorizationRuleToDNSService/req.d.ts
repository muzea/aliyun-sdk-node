export interface MoveAuthorizationRuleToDNSServiceRequest {
    /**
     * 云连接器实例ID。
     * @example `iotcc-1y6h8z7imd2yu4****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 授权规则ID。
     * @example `ar-la6sn6gng90e1x****`
     */
    "AuthorizationRuleId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会转移授权规则。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行转移。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 云连接器实例所在的地域ID。
     * >  目前，支持开通云连接器的地域：华东1（杭州）、华东2（上海）、华北1（青岛）、华北2（北京）、华北5（呼和浩特）、华北6（乌兰察布）、华南1（深圳）、华南3（广州）、西南1（成都）、德国（法兰克福）。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
