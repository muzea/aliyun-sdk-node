export type GetKubernetesTriggerResponse = {
    /**
     * 触发器ID。
     * @example `1234`
     */
    id: string;
    /**
     * 触发器名称。
     * @example `test`
     */
    name: string;
    /**
     * 集群ID。
     * @example `c259f563386444ebb8d7**`
     */
    cluster_id: string;
    /**
     * 触发器项目名称。
     * 由应用所在命名空间及应用名称组成，格式为`${namespace}/${name}`，取值示例：default/test-app。
     * @example `default/test-app`
     */
    project_id: string;
    /**
     * 触发器类型。
     * 取值：
     * - `deployment`：针对无状态应用的触发器。
     * - `application`：针对应用中心应用的触发器。
     * 默认值：`deployment`。
     * @example `deployment`
     */
    type: string;
    /**
     * 触发器行为，取值：
     * `redeploy`: 重新部署project_id中定义的资源。
     * @example `redeploy`
     */
    action: string;
    /**
     * Token
     * @example `eyJhbGci***`
     */
    token: string;
}[];
