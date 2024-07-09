export interface ListK8sIngressRulesRequest {
    /**
     * 阿里云地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 集群ID。
     * @example `5b2b4ab4-efbc-4a81-9c45-xxxxxxxxxxxxx`
     */
    "ClusterId"?: string;
    /**
     * K8s集群命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 过滤条件，JSON类型，格式为{"field":"Name", "pattern":"my-"}，其中：
     * - field：需要匹配的字段，支持Name和ClusterName。
     * - pattern：匹配内容。
     * 以{"field":"Name", "pattern":"my-"}这条过滤条件为例，该条过滤规则会匹配名称为“my-”开头的路由规则。
     * @example `{"field":"Name", "pattern":"my-"}`
     */
    "Condition"?: string;
}
