export interface GetRuleResponse {
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
     * @example `58D4CEC0-3E95-4DBE-AFC1-809D1400E52F`
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
     * 调用成功时，返回的规则详细信息。详情参见以下RuleInfo。
     */
    RuleInfo: {
        /**
         * 该规则最近一次被修改时的CST时间。
         * @example `Thu Feb 28 14:20:58 CST 2019`
         */
        Modified: string;
        /**
         * 该规则的运行状态。取值：
         * - **RUNNING**：运行中
         * - **STOP**：停止
         * @example `STOP`
         */
        Status: string;
        /**
         * 该规则的数据类型，取值：**JSON**或**BINARY**。
         * @example `JSON`
         */
        DataType: string;
        /**
         * 该规则SQL语句中的**Select**内容。
         * @example `deviceName() as deviceName`
         */
        Select: string;
        /**
         * 规则创建时的UTC时间。
         * @example `2019-02-28T06:14:33.000Z`
         */
        UtcCreated: string;
        /**
         * 若您设置了规则SQL语句，则返回：
         * - **0**：表示基础通信Topic或物模型通信Topic。
         * - **1**：表示自定义Topic。
         * - **2**：表示设备状态Topic。
         * 若未设置过规则SQL语句，则返回**-1**。
         * @example `1`
         */
        TopicType: number;
        /**
         * 创建该规则的用户ID。
         * @example `100000000000000`
         */
        CreateUserId: number;
        /**
         * 该规则SQL语句中的**Where**查询条件。
         * @example `Temperature>35`
         */
        Where: string;
        /**
         * 应用该规则的产品ProductKey。
         * @example `a1KiV******`
         */
        ProductKey: string;
        /**
         * 规则最近一次更新时的UTC时间。
         * @example `2019-02-28T06:20:58.000Z`
         */
        UtcModified: string;
        /**
         * 该规则所处理消息来源的完整Topic，格式为：`${productKey}/${deviceName}/topicShortName`。
         * > 若Topic包含通配符`+`或`#`，请参见[Topic通配符说明](~~73731~~)。
         * @example `/a1QsMlL44pp/+/user/pm25data`
         */
        Topic: string;
        /**
         * 该规则所处理消息来源的具体Topic（不包含ProductKey类目），格式为：`${deviceName}/topicShortName`。其中，${deviceName}是具体设备的名称，topicShortName是Topic余下部分。
         * > 若Topic包含通配符`+`或`#`，请参见[Topic通配符说明](~~73731~~)。
         * @example `+/user/pm25data`
         */
        ShortTopic: string;
        /**
         * 规则的描述信息。
         * @example `rule1Desc`
         */
        RuleDesc: string;
        /**
         * 规则名称。
         * @example `iotrules`
         */
        Name: string;
        /**
         * 该规则创建时的CST时间。
         * @example `Thu Feb 28 14:14:33 CST 2019`
         */
        Created: string;
        /**
         * 规则ID。
         * @example `100000`
         */
        Id: number;
    };
}
