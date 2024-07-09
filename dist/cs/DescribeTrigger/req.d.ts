export interface DescribeTriggerRequest {
    /**
     * 集群ID。
     * @example `c5cdf7e3938bc4f8eb0e44b21a80f****`
     */
    "cluster_id": string;
    /**
     * 应用所属命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 触发器类型。取值：
     * - `deployment`：针对无状态应用的触发器。
     * - `application`：针对应用中心应用的触发器。
     * 默认值：`deployment`。
     * 当不指定触发器类型时，查询结果将不过滤触发器类型。
     * @example `deployment`
     */
    "Type"?: string;
    /**
     * 应用名称。
     * @example `web-server`
     */
    "Name": string;
    /**
     * 触发器行为，取值：
     * `redeploy`：重新部署`project_id`中定义的资源。
     * 当不指定触发器行为时，查询结果将不过滤触发器行为。
     * @example `redeploy`
     */
    "action"?: string;
}
