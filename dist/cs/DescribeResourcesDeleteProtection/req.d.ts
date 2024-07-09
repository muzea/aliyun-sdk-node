export interface DescribeResourcesDeleteProtectionRequest {
    /**
     * 目标集群ID。
     * @example `c82e6987e2961451182edacd74faf****`
     */
    "ClusterId": string;
    /**
     * 删除保护的资源类型，支持namespaces和services。
     * @example `namespaces`
     */
    "ResourceType": string;
    /**
     * 查询资源所在的Namespace。
     * @example `default`
     */
    "namespace"?: string;
    /**
     * 查询的目标资源名称，多个资源以英文半角逗号（,）分割。
     * @example `test1,test2`
     */
    "resources"?: string;
}
