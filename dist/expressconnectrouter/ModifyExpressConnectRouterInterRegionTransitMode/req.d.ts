export interface ModifyExpressConnectRouterInterRegionTransitModeRequest {
    /**
     * 专线网关实例ID。
     * @example `ecr-mezk2idmsd0vx2****`
     */
    "EcrId": string;
    /**
     * 跨域转发模式列表。
     */
    "TransitModeList"?: {
        /**
         * 专线网关实例所属的地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 专线网关跨域转发模式，取值：
         * - **ECMP**：负载均衡模式。
         * - **NearBy**：就近转发模式。
         * @example `ECMP`
         */
        Mode: string;
    }[];
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改服务资源。
     * - **false**（默认值）：发送正常请求。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `FF9nMec/RZ6H9oqFn1pvyir/SLRlxCCyHJonbGzqL01hiM6Jb3wJowdHvjCfog7ww1b9rSHMRFJnrUBfVba68TJg==`
     */
    "ClientToken"?: string;
}
