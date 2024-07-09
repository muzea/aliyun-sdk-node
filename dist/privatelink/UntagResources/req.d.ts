export interface UntagResourcesRequest {
    /**
     * 资源ID列表。最多支持50个资源ID。
     */
    "ResourceId": string[];
    /**
     * 要解绑的标签键列表。最多支持20个标签键。
     */
    "TagKey"?: string[];
    /**
     * 资源类型。取值：
     * - **vpcendpoint**：终端节点。
     * - **vpcendpointservice**：终端节点服务。
     * @example `vpcendpoint`
     */
    "ResourceType": string;
    /**
     * 是否解绑资源上全部的标签，取值：
     * - **true**：解绑资源上的全部标签。
     * - **false**：不解绑全部标签。
     * > 如果同时设置了**TagKey**和本参数，则本参数不生效。
     * @example `true`
     */
    "All"?: boolean;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会解绑标签。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回`HTTP 2xx`状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    "ClientToken"?: string;
    /**
     * 地域ID。您可以通过调用[describeregions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
