export interface CreateTriggerRequest {
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 集群ID。
         * @example `c5cdf7e3938bc4f8eb0e44b21a80f****`
         */
        cluster_id: string;
        /**
         * 触发器项目名称。
         * 由应用所在命名空间及应用名称组成，格式为`${namespace}/${name}`。
         * 取值示例：`default/test-app`。
         * @example `default/test-app`
         */
        project_id: string;
        /**
         * 触发器行为，取值：
         * `redeploy`：重新部署`project_id`中定义的资源。
         * @example `redeploy`
         */
        action: string;
        /**
         * 触发器类型。取值：
         * - `deployment`：针对无状态应用的触发器。
         * - `application`：针对应用中心应用的触发器。
         * 默认值：`deployment`。
         * @example `deployment`
         */
        type: string;
    };
    /**
     * 集群ID。
     * @example `c68deb844dc6d480eb775be611fdf****`
     */
    "cluster_id": string;
}
