export interface AddNodesResponse {
    /**
     * 任务ID。
     * @example `B745C159-3155-4B94-95D0-4B73D4D2****`
     */
    TaskId: string;
    /**
     * 请求ID。
     * @example `B745C159-3155-4B94-95D0-4B73D4D2****`
     */
    RequestId: string;
    InstanceIds: {
        /**
         * 实例ID
         */
        InstanceId: string[];
    };
}
