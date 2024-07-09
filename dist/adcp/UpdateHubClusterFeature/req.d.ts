export interface UpdateHubClusterFeatureRequest {
    /**
     * 主控实例ID。您可以调用[DescribeHubClusters](~~424404~~)接口获取已创建的主控实例的ID。
     * @example `c46979b1075f04d99b5f2b710393e5****`
     */
    "ClusterId": string;
    /**
     * 主控实例名称。长度为[1, 63]个英文或数字字符。必须以大小字母开头。可以包含数字、下划线（_）或者连字符（-）。
     * @example `ack-demo`
     */
    "Name"?: string;
    /**
     * 是否开启审计日志。
     * - true：开启。
     * - false：关闭。
     * @example `true`
     */
    "AuditLogEnabled"?: boolean;
    /**
     * 是否开启服务网格（ASM）。
     * - true：开启。
     * - false：关闭。
     * @example `true`
     */
    "EnableMesh"?: boolean;
    /**
     * 集群删除保护属性，指定是否支持通过控制台或API [DeleteHubCluster](~~424406~~)删除集群。
     * -   true：开启集群删除保护。
     * -   false：关闭集群删除保护。
     * 默认值：false。
     * @example `true`
     */
    "DeletionProtection"?: boolean;
    /**
     * 是否为API Server绑定公网入口。
     * - true： 绑定公网EIP，需要绑定的时候，可以自行指定ApiServerEipId参数，若不传入，则系统会自动创建一个EIP实例。
     * - false： 解绑公网EIP。
     * @example `true`
     */
    "PublicApiServerEnabled"?: boolean;
    /**
     * EIP实例ID。
     * @example `eip-xxx`
     */
    "ApiServerEipId"?: string;
    /**
     * 是否启用ArgoCD。仅当Profile为XFlow时生效。Profile参数可调用[DescribeHubClusterDetails](~~424405~~)接口查看。
     * 本参数取值如下：
     * - true：启用。
     * - false：禁用。
     * @example `true`
     */
    "ArgoCDEnabled"?: boolean;
    /**
     * 是否启用工作流实例UI。仅当Profile为XFlow的时候生效。Profile参数可调用[DescribeHubClusterDetails](~~424405~~)接口查看。
     * 本参数取值如下：
     * - true：启用。
     * - false：禁用。
     * @example `true`
     */
    "ArgoServerEnabled"?: boolean;
    /**
     * 工作流调度模式。仅当Profile为XFlow的时候生效。Profile参数可调用[DescribeHubClusterDetails](~~424405~~)接口查看。
     * 本参数取值如下：
     * - cost-optimized：成本优先。
     * - stock-optimized：库存优先。
     * @example `cost-optimized`
     */
    "WorkflowScheduleMode"?: string;
    /**
     * 工作流负载价格限制。仅当WorkflowScheduleMode取值为cost-optimized时生效。
     * @example `0.08`
     */
    "PriceLimit"?: string;
    /**
     * 交换机列表。
     */
    "VSwitches"?: string[];
    /**
     * 是否启用工作流实例监控大盘。仅当Profile为XFlow的时候生效。取值：
     * - true：启用。
     * - false：禁用。
     * @example `true`
     */
    "MonitorEnabled"?: boolean;
    /**
     * 是否启用ArgoCD高可用。取值：
     * - true：启用。
     * - false：禁用。
     * @example `true`
     */
    "ArgoCDHAEnabled"?: boolean;
    /**
     * 是否启用ArgoCD或者Argo Workflow控制台公网域名解析。取值：
     * - true：启用。
     * - false：禁用。
     * @example `true`
     */
    "PublicAccessEnabled"?: boolean;
    /**
     * 公网访问ACL控制列表。仅当PublicAccessEnabled为true时有效。
     */
    "AccessControlList"?: string[];
    /**
     * 是否启用ArgoEvents。取值：
     * - true：启用。
     * - false：禁用。
     * @example `true`
     */
    "ArgoEventsEnabled"?: boolean;
    /**
     * 是否启用Gateway特性。取值：
     * - true：启用。
     * - false：禁用。
     * @example `true`
     */
    "GatewayEnabled"?: boolean;
}
