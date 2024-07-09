export interface ListRuleResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `1564B626-DE97-452D-9E9B-305888AC6105`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 每页显示的记录数。
     * @example `2`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `25`
     */
    Total: number;
    /**
     * 当前页码。
     * @example `1`
     */
    Page: number;
    Data: {
        /**
         * 调用成功时，返回的规则信息列表。详情参见**RuleInfo**信息。
         * > 返回规则信息按照规则创建时间倒序排列。
         */
        RuleInfo: {
            /**
             * 该规则最近一次被修改时的CST （Central Standard Time）时间。
             * @example `Wed Feb 27 20:45:43 CST 2019`
             */
            Modified: string;
            /**
             * 该规则的运行状态。取值：
             * - **RUNNING**：运行中。
             * - **STOP**：停止。
             * @example `STOP`
             */
            Status: string;
            /**
             * 该规则的数据类型，取值：**JSON**和**BINARY**。
             * @example `JSON`
             */
            DataType: string;
            /**
             * 该规则SQL语句中的**Select**内容。
             * @example `deviceName() as deviceName`
             */
            Select: string;
            /**
             * 该规则创建时的UTC时间。
             * @example `2019-02-27T12:40:43.000Z`
             */
            UtcCreated: string;
            /**
             * 创建该规则的用户ID。
             * @example `1231579085000000`
             */
            CreateUserId: number;
            /**
             * 该规则SQL语句中的**Where**查询条件。
             * @example `Temperature>35`
             */
            Where: string;
            /**
             * 应用该规则的产品**Productkey**。
             * @example `a1KiV******`
             */
            ProductKey: string;
            /**
             * 该规则最近一次被修改时的UTC时间。
             * @example `2019-02-27T12:45:43.000Z`
             */
            UtcModified: string;
            /**
             * 应用该规则的具体Topic，格式为：`${productKey}/${deviceName}/topicShortName`。
             * > 若Topic包含通配符`+`或`#`，请参见[Topic通配符说明](~~73731~~)。
             * @example `/a1T27vz****​/+/thing/event/property/post`
             */
            Topic: string;
            /**
             * 应用该规则的具体Topic（不包含ProductKey类目），格式为：`${deviceName}/topicShortName`。其中，${deviceName}是具体设备的名称，topicShortName是Topic余下部分。
             * > 若Topic包含通配符`+`或`#`，请参见[Topic通配符说明](~~73731~~)。
             * @example `+/thing/event/property/post`
             */
            ShortTopic: string;
            /**
             * 规则的描述信息。
             * @example `rule1Desc`
             */
            RuleDesc: string;
            /**
             * 规则名称。
             * @example `test123`
             */
            Name: string;
            /**
             * 该规则创建时的CST（Central Standard Time）时间。
             * @example `Wed Feb 27 20:45:43 CST 2019`
             */
            Created: string;
            /**
             * 规则ID。
             * @example `151454`
             */
            Id: number;
        }[];
    };
}
