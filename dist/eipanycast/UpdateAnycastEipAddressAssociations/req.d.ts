export interface UpdateAnycastEipAddressAssociationsRequest {
    /**
     * 要绑定的云资源实例ID。
     * @example `lb-d7oxbixhxv1uupnon****`
     */
    "BindInstanceId": string;
    /**
     * Anycast EIP实例ID。
     * @example `aeip-bp1ix34fralt4ykf3****`
     */
    "AnycastId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会更新绑定关系。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 需要新增的关联接入区域和接入点列表。
     */
    "PopLocationAddList"?: {
        /**
         * 需要新增的关联接入区域的接入点。
         * 您可以通过调用[DescribeAnycastPopLocations](~~171938~~)接口获取支持的接入区域的接入点信息。
         * @example `us-west-1-pop`
         */
        PopLocation: string;
    }[];
    /**
     * 待删除的关联接入区域和接入点列表。
     */
    "PopLocationDeleteList"?: {
        /**
         * 待删除的关联接入区域的接入点列表。
         * > 当该接入区域的接入点关联的云资源实例为默认源站时，无法删除该接入区域的接入点。
         * @example `eu-west-1-pop`
         */
        PopLocation: string;
    }[];
    /**
     * 绑定模式，取值：
     * - **Default**：默认模式，将要绑定的云资源实例设置为默认源站。
     * - **Normal**：普通模式，要绑定的云资源实例设置为普通源站。
     * @example `Default`
     */
    "AssociationMode"?: string;
}
