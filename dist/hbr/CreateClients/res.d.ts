export interface CreateClientsResponse {
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
     * @example `4A8A9AE4-F798-5E6D-853E-10F9F5A1BD4E`
     */
    RequestId: string;
    /**
     * 异步任务ID。可以通过调用DescribeTask获取任务结果。
     * @example `t-000h9x5t02vhyksf1x7k`
     */
    TaskId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    InstanceStatuses: {
        /**
         * ECS实例状态。
         * 若存在ECS实例状态不满足安装客户端的需求，且请求中InstanceIds多于1个时，通过这个字段返回错误信息。
         */
        InstanceStatus: {
            /**
             * ECS实例是否可以安装备份客户端。
             * - true：可以安装。
             * - false：不可以安装。
             * @example `true`
             */
            ValidInstance: boolean;
            /**
             * ECS实例ID。
             * @example `i-2zegp3cdu******uj9i`
             */
            InstanceId: string;
        }[];
    };
}
