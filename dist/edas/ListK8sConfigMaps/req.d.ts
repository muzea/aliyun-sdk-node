export interface ListK8sConfigMapsRequest {
    /**
     * 阿里云地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 集群ID。
     * @example `c0830281-366c-41b6-80fb-542e76******`
     */
    "ClusterId"?: string;
    /**
     * K8s集群命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 当前页面，从0开始计数。
     * @example `0`
     */
    "PageNo"?: number;
    /**
     * 分页查询，每页显示的条数。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 过滤条件，JSON对象字符串，示例：{"field":"Name", "pattern":"configmap-"}。
     * @example `{"field":"Name", "pattern":"configmap-"}`
     */
    "Condition"?: string;
    /**
     * 是否返回使用该配置项的应用列表，true表示返回，false表示不返回。
     * @example `true`
     */
    "ShowRelatedApps"?: boolean;
}
