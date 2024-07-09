export interface CreateResourceInstancesResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 机器实例ID列表。
     */
    InstanceIds: string[];
    /**
     * 操作成功返回信息。
     * @example `Create 5 new ecs instance(s) in resource [eas-r-asdasdasd] successfully`
     */
    Message: string;
}
