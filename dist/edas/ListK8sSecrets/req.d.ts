export interface ListK8sSecretsRequest {
    /**
     * 集群ID。
     * @example `7a953f9a-2946-4c7a-9d82-9939db******`
     */
    "ClusterId"?: string;
    /**
     * K8s集群命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 阿里云地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 当前页码，从0开始计数。
     * @example `0`
     */
    "PageNo"?: number;
    /**
     * 分页查询，每页显示的条数。值为0时不进行分页，返回所有内容。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 过滤条件，JSON对象字符串，示例：{"field":"Name", "pattern":"configmap-"}。
     * @example `{\"field\":\"Name\",\"pattern\":\"product\"}`
     */
    "Condition"?: string;
    /**
     * 返回使用该保密配置的应用列表。
     * @example `true`
     */
    "ShowRelatedApps"?: boolean;
}
