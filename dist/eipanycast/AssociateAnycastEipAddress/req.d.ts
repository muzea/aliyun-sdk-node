export interface AssociateAnycastEipAddressRequest {
    /**
     * 要绑定的云资源实例ID。
     * @example `lb-d7oxbixhxv1uupnon****`
     */
    "BindInstanceId": string;
    /**
     * 要绑定的云资源实例地域ID。
     * 仅支持绑定部分地域的云资源实例，您可以通过调用[DescribeAnycastServerRegions](~~171939~~)接口获取可绑定云资源实例的地域ID。
     * @example `us-west-1`
     */
    "BindInstanceRegionId": string;
    /**
     * 要绑定的云资源实例类型。取值：
     * - **SlbInstance**：专有网络类型的CLB实例。
     * - **NetworkInterface**：弹性网卡。
     * @example `SlbInstance`
     */
    "BindInstanceType": string;
    /**
     * Anycast EIP实例ID。
     * @example `aeip-bp1ix34fralt4ykf3****`
     */
    "AnycastId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会绑定实例。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 绑定云资源实例时，关联的接入区域的接入点信息。
     * 如果您是第一次绑定，该参数无需配置，系统自动关联所有接入区域。
     * 您可以通过调用[DescribeAnycastPopLocations](~~171938~~)接口获取支持的接入区域的接入点信息。
     */
    "PopLocations"?: {
        /**
         * 绑定云资源实例时，关联的接入区域的接入点信息。
         * 如果您是第一次绑定，该参数无需配置，系统自动关联所有接入区域。
         * 您可以通过调用[DescribeAnycastPopLocations](~~171938~~)接口获取支持的接入区域的接入点信息。
         * @example `us-west-1-pop`
         */
        PopLocation: string;
    }[];
    /**
     * 绑定模式，取值：
     * - **Default**：默认模式，将要绑定的云资源实例设置为默认源站。
     * - **Normal**：普通模式，要绑定的云资源实例设置为普通源站。
     * >  Anycast EIP支持绑定多个地域的云资源实例，仅支持一个云资源实例为默认源站，其余均为普通源站。当不指定接入点或新增接入点时，访问请求默认转发至默认源站。<br/><ul><li>如果您是第一次绑定，绑定模式默认取值为**Default**。</li><li>如果您不是第一次绑定，您可以将绑定模式设置为**Default**，将生效新的默认源站，原默认源站将变更为普通源站。</li></ul>
     * @example `Default`
     */
    "AssociationMode"?: string;
    /**
     * 要绑定的弹性网卡的辅助私网IP。
     * 只有当**BindInstanceType**取值为**NetworkInterface**时，该参数生效。不输入时，该参数默认为弹性网卡的主私网IP。
     * @example `192.168.XX.XX`
     */
    "PrivateIpAddress"?: string;
}
