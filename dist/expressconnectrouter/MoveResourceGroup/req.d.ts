export interface MoveResourceGroupRequest {
    /**
     * 新资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmvt3xpr5****`
     */
    "NewResourceGroupId": string;
    /**
     * 资源类型。可能的值：
     * - EXPRESSCONNECTROUTER：专线网关。
     * @example `EXPRESSCONNECTROUTER`
     */
    "ResourceType": string;
    /**
     * 需要修改资源组的云资源的实例ID。
     * @example `ecr-897j0jooxyr1aq****`
     */
    "ResourceId": string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建服务器组。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `02fb3da4-130e-11e9-8e44-00****`
     */
    "ClientToken"?: string;
}
