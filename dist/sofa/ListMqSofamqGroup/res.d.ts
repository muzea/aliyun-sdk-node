export interface ListMqSofamqGroupResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 查询到的订阅关系集合
     */
    Data: {
        /**
         * 页码
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示条数
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数
         * @example `100`
         */
        Total: number;
        /**
         * Group 信息
         */
        Content: {
            /**
             * 重试权限
             * @example `6`
             */
            RetryPerm: number;
            /**
             * 集群名
             * @example `SINGLE`
             */
            Cluster: string;
            /**
             * Group 备注信息
             * @example `test`
             */
            Remark: string;
            /**
             * 实例 ID
             * @example `SOFAMQ_INSTANCE_000001`
             */
            InstanceId: string;
            /**
             * 修改时间，单位：毫秒
             * @example `1570966857000`
             */
            GmtModified: number;
            /**
             * 重试写队列权限
             * @example `1`
             */
            RetryWriteQueueNum: number;
            /**
             * 删除标记
             * @example `0`
             */
            DeleteMark: string;
            /**
             * Group ID
             * @example `test_group_id`
             */
            GroupId: string;
            /**
             * 版本
             * @example `1`
             */
            Version: number;
            /**
             * 创建时间，单位：毫秒
             * @example `1570966857000`
             */
            GmtCreate: number;
            /**
             * 重试读队列数量
             * @example `1`
             */
            RetryReadQueueNum: number;
            /**
             * 作用范围
             * @example `*`
             */
            Scope: string;
            /**
             * 操作人
             * @example `alipay`
             */
            Operator: string;
            /**
             * 分组类型，默认为 tcp，表示该 Group ID 仅适用于 TCP 协议的消息收发。
             * @example `tcp`
             */
            GroupType: string;
            /**
             * 读权限
             * @example `true`
             */
            ReadEnable: boolean;
            /**
             * 数据库 ID
             * @example `1`
             */
            Id: number;
        }[];
    };
}
