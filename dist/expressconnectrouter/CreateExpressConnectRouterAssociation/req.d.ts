export interface CreateExpressConnectRouterAssociationRequest {
    /**
     * 专线网关实例ID。
     * @example `ecr-mezk2idmsd0vx2****`
     */
    "EcrId": string;
    /**
     * 关联资源所属的地域。
     * @example `cn-hangzhou`
     */
    "AssociationRegionId": string;
    /**
     * 转发路由器实例所属阿里云账号（主账号）ID。默认值为当前登录的阿里云账号ID。
     * > 如果您要加载跨账号的网络实例，本参数必填。
     * @example `189159362009****`
     */
    "TransitRouterOwnerId"?: number;
    /**
     * 转发路由器ID。
     * @example `tr-2ze4i71c6be454e2l****`
     */
    "TransitRouterId"?: string;
    /**
     * 云企业网实例ID。
     * @example `cen-of3o1the3i4gwb****`
     */
    "CenId"?: string;
    /**
     * VPC实例所属阿里云账号（主账号）ID。默认为当前登录的阿里云账号ID。
     * > 如果您要加载跨账号的网络实例，本参数必填。
     * @example `132193271328****`
     */
    "VpcOwnerId"?: number;
    /**
     * VPC实例ID。
     * @example `vpc-bp1h37fchc6jmfyln****`
     */
    "VpcId"?: string;
    /**
     * 允许的前缀路由列表。
     */
    "AllowedPrefixes"?: string[];
    /**
     * ECR绑定TR时是否发起关联。取值：
     * - **true**：不需要在转发路由器侧发起关联。
     * - **false**：需要在转发路由器侧发起关联。
     * @example `true`
     */
    "CreateAttachment"?: boolean;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改服务资源。
     * - **false**（默认值）：发送正常请求。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-00****
    `
     */
    "ClientToken"?: string;
}
