export interface OnsTraceGetResultResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `84EE24D2-851F-40D6-B99E-4D6AB909****`
     */
    RequestId: string;
    /**
     * 该查询任务的结果明细。
     */
    TraceData: {
        /**
         * 该查询任务的结果。取值说明如下：
         * - **finish**：查询完成
         * - **working**：查询中
         * - **removed**：任务已删除
         * @example `finish`
         */
        Status: string;
        /**
         * 该查询任务对应的Message Key。
         * @example `ORDERID_100`
         */
        MsgKey: string;
        /**
         * 该查询任务的最后更新时间。
         * @example `1570966877000`
         */
        UpdateTime: number;
        /**
         * 该查询任务的创建时间。
         * @example `1570966857000`
         */
        CreateTime: number;
        /**
         * 该查询任务的Topic。
         * @example `test`
         */
        Topic: string;
        /**
         * 查询用户ID。
         * @example `27296756265288****`
         */
        UserId: string;
        /**
         * 实例ID。
         * @example `MQ_INST_111111111111_DOxxxxxx`
         */
        InstanceId: string;
        /**
         * 该查询任务对应的Message ID。
         * @example `1E05791C117818B4AAC23B1BB0CE****`
         */
        MsgId: string;
        TraceList: {
            /**
             * 该查询任务的匹配轨迹列表。
             */
            TraceMapDo: {
                /**
                 * 发送状态。取值说明如下：
                 * - **SEND_SUCCESS**：发送成功
                 * - **SEND_FAILED**：发送失败
                 * - **SEND_ROLLBACK**：事务消息回滚
                 * - **SEND_UNKNOWN**：事务消息未提交
                 * - **SEND_DELAY**：定时（延时）消息定时中
                 * @example `SEND_SUCCESS`
                 */
                Status: string;
                /**
                 * 消息的Key ，即Message Key。
                 * @example `ORDERID_100`
                 */
                MsgKey: string;
                /**
                 * 消息发送时间。
                 * @example `1570850870478`
                 */
                PubTime: number;
                SubList: {
                    /**
                     * 消息的消费轨迹列表。
                     */
                    SubMapDo: {
                        ClientList: {
                            /**
                             * 该Group ID客户端消费记录的明细列表。
                             */
                            SubClientInfoDo: {
                                /**
                                 * 消费状态。取值说明如下：
                                 * - **CONSUME_FAILED**：消费失败
                                 * - **CONSUME_SUCCESS**：消费成功
                                 * - **CONSUME_NOT_RETURN**：消费未返回结果
                                 * - **SEND_UNKNOWN**：事务消息未提交
                                 * - **SEND_DELAY**：定时（延时）消息定时中
                                 * @example `CONSUME_SUCCESS`
                                 */
                                Status: string;
                                /**
                                 * 消费开始时间戳。
                                 * @example `1570851590511`
                                 */
                                SubTime: number;
                                /**
                                 * 本次消费的投递轮次。
                                 * @example `1`
                                 */
                                ReconsumeTimes: number;
                                /**
                                 * 该客户端所属的Group ID。
                                 * @example `GID_test`
                                 */
                                SubGroupName: string;
                                /**
                                 * 消费客户端的客户端地址。
                                 * @example `30.5.**.**`
                                 */
                                ClientHost: string;
                                /**
                                 * 本次消费耗时，单位毫秒。
                                 * @example `43`
                                 */
                                CostTime: number;
                            }[];
                        };
                        /**
                         * 该Group ID消费失败次数统计。
                         * @example `0`
                         */
                        FailCount: number;
                        /**
                         * 消费方Group ID。
                         * @example `GID_test`
                         */
                        SubGroupName: string;
                        /**
                         * 该Group ID消费成功次数统计。
                         * @example `1`
                         */
                        SuccessCount: number;
                    }[];
                };
                /**
                 * 消息的Topic。
                 * @example `test`
                 */
                Topic: string;
                /**
                 * 发送耗时，单位毫秒。
                 * @example `24`
                 */
                CostTime: number;
                /**
                 * 消息的Tag，即Message Tag。
                 * @example `TagA`
                 */
                Tag: string;
                /**
                 * 消息的ID，即Message ID。
                 * @example `0BC1F01800002A9F000000531246****`
                 */
                MsgId: string;
                /**
                 * 发送方客户端配置的Group ID。
                 * @example `GID_test`
                 */
                PubGroupName: string;
                /**
                 * 消息发送方的客户端地址。
                 * @example `30.5.**.**`
                 */
                BornHost: string;
            }[];
        };
        /**
         * 查询任务ID。
         * @example `272967562652883649157096685****`
         */
        QueryId: string;
    };
}
