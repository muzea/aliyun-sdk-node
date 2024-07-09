export interface UpdateServiceManagedControlRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567****`
     */
    "ClientToken"?: string;
    /**
     * 操作的资源类型。取值：
     *  **Accelerator**：标准型全球加速实例。
     * @example `Accelerator`
     */
    "ResourceType": string;
    /**
     * 待操作的资源ID。
     * @example `ga-bp149u6o36qt1as9b****`
     */
    "ResourceId": string;
    /**
     * 设置资源托管模式。取值：
     * **false**：解除当前资源的托管状态。
     * > 当前仅支持解除托管。
     * @example `false`
     */
    "ServiceManaged"?: boolean;
}
