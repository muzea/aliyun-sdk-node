export interface GenerateK8sAccessInfoRequest {
    /**
     * k8s集群的名称。
     * @example `test`
     */
    "ClusterName": string;
    /**
     * 查询到的分组ID。
     * @example `11341690`
     */
    "GroupId": number;
    /**
     * 云资产厂商。取值：
     * - **Tencent**
     * - **HUAWEICLOUD**
     * - **Azure**
     * - **AWS**
     * - **其它云资产**
     * @example `Tencent`
     */
    "Vendor": string;
    /**
     * 容器接入过期时间。
     * @example `1711951508388`
     */
    "ExpireDate": number;
    /**
     * 审计日志region。
     * @example `cn-hangzhou`
     */
    "AuditRegionId"?: string;
    /**
     * 审计日志 sls project。
     * @example `k8s-log-custom-huxintest1018-2`
     */
    "AuditProject"?: string;
    /**
     * 审计日志 sls logstore。
     * @example `audit-cf6baf6afa106eca665296fdf68b65bf`
     */
    "AuditLogStore"?: string;
    /**
     * 该参数已废弃，无需关注 。
     * @example `None`
     */
    "AliyunYundunGatewayProjectName"?: string;
    /**
     * 该参数已废弃，无需关注 。
     * @example `None`
     */
    "AliyunYundunGatewayApiName"?: string;
    /**
     * 该参数已废弃，无需关注 。
     * @example `None`
     */
    "AliyunYundunGatewayPopName"?: string;
}
