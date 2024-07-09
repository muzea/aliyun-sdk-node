export interface DescribeEventsRequest {
    /**
     * 集群ID。
     * @example `cf62854ac2130470897be7a27ed1f****`
     */
    "cluster_id"?: string;
    /**
     * 事件类型。取值：
     * - `cluster_create`：创建集群。
     * - `cluster_scaleout`：扩容集群。
     * - `cluster_attach`：添加已有节点。
     * - `cluster_delete`：删除集群。
     * - `cluster_upgrade`：升级集群。
     * - `cluster_migrate`：迁移集群。
     * - `cluster_node_delete`：移除节点。
     * - `cluster_node_drain`：清空节点。
     * - `cluster_modify`：修改集群。
     * - `cluster_configuration_modify`：修改集群管控配置。
     * - `cluster_addon_install`：安装组件。
     * - `cluster_addon_upgrade`：升级组件。
     * - `cluster_addon_uninstall`：卸载组件。
     * - `runtime_upgrade`：升级运行时。
     * - `nodepool_upgrade`：升级节点池。
     * - `nodepool_update`：更新节点池。
     * @example `nodepool_upgrade`
     */
    "type"?: string;
    /**
     * 每页显示数量。
     * @example `50`
     */
    "page_size"?: number;
    /**
     * 分页查询页数。
     * @example `1`
     */
    "page_number"?: number;
}
