export interface AttachInstancesResponse {
    /**
     * 节点添加信息列表。
     */
    list: {
        /**
         * 节点添加结果状态码。
         * @example `200`
         */
        code: string;
        /**
         * 实例ID。
         * @example `i-2ze0lgm3y6iylcbt****`
         */
        instanceId: string;
        /**
         * 节点添加结果描述信息。
         * @example `successful`
         */
        message: string;
    }[];
    /**
     * 任务ID。
     * @example `T-5a544aff80282e39ea000039`
     */
    task_id: string;
}
