export interface ListGroupsRequest {
    /**
     * 命名空间，在控制台的**命名空间**页面中获取。
     * @example `1a72ecb1-b4cc-400a-a71b-20cdec9b****`
     */
    "Namespace": string;
    /**
     * 特殊第三方才需要填写。
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用分组名称。
     * @example `k8s-test`
     */
    "AppGroupName"?: string;
}
