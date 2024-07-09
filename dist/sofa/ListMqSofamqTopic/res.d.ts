export interface ListMqSofamqTopicResponse {
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
     * 返回所有查询到的 Topic 信息列表
     */
    Data: {
        /**
         * 页码
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示条数
         * @example `10`
         */
        PageSize: number;
        /**
         * 总条数
         * @example `100`
         */
        Total: number;
        /**
         * Topic 信息
         */
        Content: {
            /**
             * 集群名称
             * @example `single`
             */
            Cluster: string;
            /**
             * Topic 备注信息
             * @example `desc`
             */
            Remark: string;
            /**
             * 写分区数
             * @example `8`
             */
            WriteQueueNum: number;
            /**
             * 读分区数
             * @example `8`
             */
            ReadQueueNum: number;
            /**
             * 实例 ID
             * @example `000001`
             */
            InstanceId: string;
            /**
             * 修改时间
             * @example `1570966857000`
             */
            GmtModified: number;
            /**
             * 消息类型。取值说明如下：
             * 0：普通消息
             * 1：分区顺序消息
             * 2：全局顺序消息
             * 4：事务消息
             * 5：定时/延时消息
             * @example `0`
             */
            MessageType: number;
            /**
             * 设置该 Topic 的读写模式。取值说明如下：
             * 6：同时支持读写
             * 4：禁写
             * 2：禁读
             * @example `6`
             */
            Perm: number;
            /**
             * Topic 名称
             * @example `TP_TEST`
             */
            Topic: string;
            /**
             * 创建时间
             * @example `1570966857000`
             */
            GmtCreate: number;
            /**
             * 创建人
             * @example `alipay`
             */
            Operator: string;
            /**
             * 数据库 ID
             * @example `1`
             */
            Id: number;
        }[];
    };
}
