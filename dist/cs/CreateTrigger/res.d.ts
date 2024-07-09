export interface CreateTriggerResponse {
    /**
     * 触发器ID。
     * @example `102536`
     */
    id: string;
    /**
     * 集群ID。
     * @example `c93095129fc41463aa455d89444fd****`
     */
    cluster_id: string;
    /**
     * 触发器项目名称。
     * @example `default/test-app`
     */
    project_id: string;
    /**
     * 触发器类型。默认值为 deployment 。
     * @example `deployment`
     */
    type: string;
    /**
     * 触发器行为。例如，`redeploy`：重新部署。
     * @example `redeploy`
     */
    action: string;
}
