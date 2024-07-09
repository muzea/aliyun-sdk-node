export interface DeleteClusterRequest {
    /**
     * 集群ID。
     * @example `c905d1364c2dd4b6284a3f41790c4****`
     */
    "ClusterId": string;
    /**
     * 是否保留所有资源。如果设置该值为`true`，则会忽略`retain_resources`，通过`DescribeClusterResources`接口查询到的通过集群创建的云资源将被保留。如果该值为`false`，请注意`delete_options`中默认保留的资源仍将被保留，如需删除相关资源，请单独在`delete_options`中设置`delete_mode`为`delete`。
     * - `true`：保留所有资源，包含所有通过集群创建的云资源
     * - `false`：不保留所有资源（`delete_options`中定义的默认保留资源除外，如`ALB`在该参数取值为`false`时仍然保留）
     * 默认值：`false`。
     * @example `false`
     */
    "retain_all_resources"?: boolean;
    /**
     * 是否保留SLB，取值：
     * - `true`：保留创建的SLB资源。
     * - `false`：不保留创建的SLB资源。
     * 默认值：`false`。
     * 请使用`delete_options`中的`SLB`管理
     * @example `false`
     */
    "keep_slb"?: boolean;
    /**
     * 资源列表。删除集群时如果需要保留资源，则需要提供对应资源的ID。
     */
    "retain_resources"?: string[];
    /**
     * 集群关联资源的删除选项。
     */
    "delete_options"?: {
        /**
         * 资源类型，可取值：
         * - SLB：通过service创建的SLB资源，默认删除，可选择保留
         * - ALB：ALB Ingress Controller创建的ALB资源，默认保留，可选择删除
         * - SLS_Data：集群日志功能所使用的日志服务Project，默认保留，可选择删除
         * - SLS_ControlPlane：托管版集群控制平面日志所使用的日志服务Project，默认保留，可选择删除
         * - PrivateZone：ACK Serverless集群创建的PrivateZone资源，默认保留，可选择删除
         * @example `SLS_Data`
         */
        resource_type: string;
        /**
         * 该类型资源的删除策略，可取值：
         * - delete：删除该类资源
         * - retain：保留该类资源
         * @example `delete`
         */
        delete_mode: string;
    }[];
}
