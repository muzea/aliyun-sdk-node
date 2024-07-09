export interface GetRuleActionResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `F2D0755D-F350-40FE-9A6D-491859DB5E5F`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的规则动作详细信息。详情参见以下参数。
     */
    RuleActionInfo: {
        /**
         * 该规则动作是否为转发错误操作数据的转发动作，即转发流转到其他云产品失败且重试失败的数据。
         * - **true**：该规则动作转发错误操作数据。
         * - **false**：该规则动作不转发错误操作数据，而是正常转发操作。
         * @example `false`
         */
        ErrorActionFlag: boolean;
        /**
         * 规则动作类，取值：
         * - **REPUBLISH**：转发到另一个topic。
         * - **OTS**：存储到表格存储。
         * - **MNS**：发送消息到消息服务。
         * <props="china">- **ONS**：发送数据到消息队列。</props>
         * <props="china">- **TSDB**：存储到高性能时间序列数据库。</props>
         * - **FC**：发送数据到函数计算。
         * <props="china">- **DATAHUB**：发送数据到DataHub中。</props>
         * - **RDS**：存储数据到云数据库中。
         * - **AMQP**：数据流转到AMQP消费组。
         * @example `REPUBLISH`
         */
        Type: string;
        /**
         * 该规则动作的配置信息。
         * @example `{\"topic\":\"/sys/a1zSA28****​/device/thing/service/property/set\",\"topicType\":0,\"uid\":\"1231579*******\"}`
         */
        Configuration: string;
        /**
         * 规则动作ID。
         * @example `100001`
         */
        Id: number;
        /**
         * 该规则动作对应的规则ID。
         * @example `152323`
         */
        RuleId: number;
    };
}
