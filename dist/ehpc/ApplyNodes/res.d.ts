export interface ApplyNodesResponse {
    /**
     * 任务ID。
     * @example `B745C159-3155-4B94-95D0-4B73D4D2****`
     */
    RequestId: string;
    /**
     * 创建成功的计算节点数量。
     * @example `10`
     */
    SatisfiedAmount: number;
    /**
     * 请求ID。
     * @example `B745C159-3155-4B94-95D0-4B73D4D2****`
     */
    TaskId: string;
    /**
     * API调用结果详情。
     * @example `Resources Application is satisfied. Creating...`
     */
    Detail: string;
    InstanceIds: {
        /**
         * 实例ID。
         *  > 由于ApplyNodes是异步操作，请求成功就会立即返回结果，不会等待实例创建成功，因此InstanceIds内容为空。您可以通过[ListNodes](~~87161~~)获取InstanceId。
         */
        InstanceId: string[];
    };
}
