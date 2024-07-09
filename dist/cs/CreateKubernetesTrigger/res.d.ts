export interface CreateKubernetesTriggerResponse {
    /**
     * 触发器ID。
     * @example `111`
     */
    id: string;
    /**
     * 集群ID。
     * @example `c5cdf7e3938bc4f8eb0e44b21a80f****`
     */
    cluster_id: string;
    /**
     * 触发器项目名称。
     * @example `default/test-app`
     */
    project_id: string;
    /**
     * 触发器类型。
     * 取值：
     * - `deployment`：针对无状态应用的触发器。
     * - `application`：针对应用中心应用的触发器。
     * @example `deployment`
     */
    type: string;
    /**
     * 触发器行为。例如，`redeploy`：重新部署。
     * @example `redeploy`
     */
    action: string;
}
