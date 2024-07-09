export interface DescribeInstancesRequest {
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页的实例个数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 列出指定集群 id 中的所有实例。
     * > 如果此参数未指定，则列出所有集群中的实例。
     * @example `gws-xxx`
     */
    "ClusterId"?: string;
    /**
     * 列出实例 id 的信息。
     * > 如果此参数未指定，则列出所有实例。
     * @example `i-xxx`
     */
    "InstanceId"?: string;
    /**
     * 列出分配给指定用户 id 的所有实例。
     * > 如果此参数未指定，则列出所有用户的实例。
     * @example `12345`
     */
    "UserUid"?: number;
    /**
     * 列出分配给指定用户的所有实例。
     * > 如果此参数未指定，则列出所有用户的实例。
     * @example `user01`
     */
    "UserName"?: string;
}
