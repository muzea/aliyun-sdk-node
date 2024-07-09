export interface CreateHubClusterRequest {
    /**
     * 地域ID。说明您可以通过DescribeRegions接口查看可用地域。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 集群所属的VPC ID。您可以调用DescribeVpcs查询已创建的VPC信息。
     * @example `vpc-f8zin0jscsr84s96tg***`
     */
    "VpcId": string;
    /**
     * 是否使用公网地址暴露API Server，取值
     * - true 使用公网API Server
     * - false 使用内网API Server
     * @example `true`
     */
    "ApiServerPublicEip"?: boolean;
    /**
     * 主控实例名称。
     * @example `ack-demo`
     */
    "Name"?: string;
    /**
     * 虚拟交换机ID。
     * @example `["vsw-2zeaijsas4zkzz81xm***"]`
     */
    "VSwitches": string;
    /**
     * 是否开启审计日志。取值
     * - true：开启。
     * - false：关闭。
     * @example `false`
     */
    "AuditLogEnabled"?: boolean;
    /**
     * 是否企业安全组。
     * @example `false`
     */
    "IsEnterpriseSecurityGroup"?: boolean;
    /**
     * 主控实例配置信息。取值：
     * - `Default`：标准场景主控实例。
     * - `XFlow`：工作流场景主控实例。
     * 默认值：`Default`。
     * @example `Default`
     */
    "Profile"?: string;
    /**
     * 是否启用工作流集群UI。仅当Profile为XFlow的时候生效。取值：
     * true：启用。
     * false：禁用。
     * @example `true`
     */
    "ArgoServerEnabled"?: boolean;
    /**
     * 工作流调度模式。仅当Profile为XFlow的时候生效。取值
     * - cost-optimized：成本优先
     * - stock-optimized：库存优先
     * @example `cost-optimized`
     */
    "WorkflowScheduleMode"?: string;
    /**
     * 工作流负载价格限制。WorkflowScheduleMode取值为cost-optimized时生效。
     * @example `0.08`
     */
    "PriceLimit"?: string;
    /**
     * 资源组ID。
     * @example `rg-d1ye4kpy1z***`
     */
    "ResourceGroupID"?: string;
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: any[];
}
