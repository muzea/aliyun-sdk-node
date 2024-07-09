export interface UninstallBackupClientsResponse {
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 异步任务ID。可以调用DescribeTask获取任务结果。
     * @example `t-*********************`
     */
    TaskId: string;
    /**
     * 请求是否成功。
     * - true表示成功。
     * - false表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * ECS实例状态。
     */
    InstanceStatuses: {
        /**
         * ECS实例是否可以安装备份客户端。
         * - true表示可以安装。
         * - false表示不可以安装。
         * @example `true`
         */
        ValidInstance: boolean;
        /**
         * ECS实例ID。
         * @example `i-0xi5w***v3j3bh2gj5`
         */
        InstanceId: string;
        /**
         * 返回错误码。取值范围：
         * - 空表示成功。
         * - **InstanceNotExists**表示ECS实例不存在。
         * - **InstanceNotRunning**表示ECS实例未处于Running状态。
         * - **CloudAssistNotRunningOnInstance**表示云助手不可用。
         * @example `InstanceNotExists`
         */
        ErrorCode: string;
    }[];
}
