export interface ListRuleActionsResponse {
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
     * @example `22254BDB-3DC1-4643-8D1B-EE0437EF09A9`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    RuleActionList: {
        /**
         * 调用成功后，返回规则下所有数据目的列表。详细信息，请参见以下**RuleActionInfo**所包含的参数。
         */
        RuleActionInfo: {
            /**
             * 数据目的对应的操作类型。返回值：
             * - **REPUBLISH**：转发到另一个topic。
             * - **OTS**：存储到表格存储。
             * - **MNS**：发送消息到消息服务。
             * - **ONS**：发送数据到消息队列RocketMQ。
             * - **TSDB**：存储到时序数据库。
             * - **FC**：发送数据到函数计算。
             * <props="china">- **DATAHUB**：发送数据到DataHub中。</props>
             * - **RDS**：存储数据到云数据库中。
             * - **AMQP**：数据流转到AMQP消费组。
             * @example `OTS`
             */
            Type: string;
            /**
             * 数据目的对应的状态。返回值：
             * - **INIT**：初始配置中。
             * - **NORMAL**：配置完成，正常可用。
             * - **INVALID**：配置存在异常，不可用。
             * - **SHORTCUT**：云产品流转服务发生异常，导致流转熔断。
             * @example `NORMAL`
             */
            Status: string;
            /**
             * 数据目的对应的配置信息。
             * @example `{\"endPoint\":\"http://ShanghaiRegion.cn-shanghai.ots.aliyuncs.com\",\"instanceName\":\"ShanghaiRegion\",\"primaryKeys\":[{\"columnName\":\"temperature\",\"columnType\":\"INTEGER\",\"columnValue\":\"${deviceName}\"}],\"regionName\":\"cn-shanghai\",\"role\":{\"roleArn\":\"acs:ram::1231579085******:role/aliyuniotaccessingotsrole\",\"roleName\":\"AliyunIOTAccessingOTSRole\"},\"tableName\":\"iottest\",\"uid\":\"1231579085******\"}`
             */
            Configuration: string;
            /**
             * 该数据目的配置是否为转发错误操作数据，即转发流转到其他云产品失败且重试失败的数据。
             * - **true**：是转发错误操作数据。
             * - **false**：不是转发错误操作数据，而是正常转发操作。
             * @example `false`
             */
            ErrorActionFlag: boolean;
            /**
             * 数据目的对应的操作ID。
             * @example `139099`
             */
            Id: number;
            /**
             * 数据目的对应的规则ID。
             * @example `10000`
             */
            RuleId: number;
        }[];
    };
}
