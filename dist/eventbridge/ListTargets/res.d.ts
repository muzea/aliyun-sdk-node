export interface ListTargetsResponse {
    /**
     * 错误信息。
     * @example `EventRuleNotExisted`
     */
    Message: string;
    /**
     * 请求ID，阿里云为该请求生成的唯一标识符。
     * @example `5DAF96FB-A4B6-548C-B999-0BFDCB22****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 事件目标。
         */
        Targets: {
            /**
             * 事件目标类型。更多信息，请参见[事件目标参数](~~183698~~)。
             * @example `acs.fc.function `
             */
            Type: string;
            /**
             * 投递端点链接。
             * @example `acs:fc:cn-hangzhou:123456789098****:services/guide.LATEST/functions/HelloFC `
             */
            Endpoint: string;
            /**
             * 事件目标的参数。
             */
            ParamList: {
                /**
                 * 事件目标参数的值。
                 * @example `{\"key\"=\"value\"}`
                 */
                Value: string;
                /**
                 * 事件目标参数模板样式。
                 * @example `The value of ${key} is ${value}! `
                 */
                Template: string;
                /**
                 * 事件目标参数的格式。
                 * @example `TEMPLATE`
                 */
                Form: string;
                /**
                 * 事件目标的资源参数。
                 * @example `body`
                 */
                ResourceKey: string;
            }[];
            /**
             * 容错策略。取值说明如下： ALL：允许容错。允许异常容错，当异常发生时不会阻塞执行，超过重试策略后会根据配置将消息投递至死信队列或直接丢弃。 NONE：禁止容错。不允许容错，当异常发生并超过重试策略配置时会阻塞执行。
             * @example `ALL`
             */
            ErrorsTolerance: string;
            /**
             * 事件目标ID。
             * @example `1453`
             */
            Id: string;
            /**
             * 事件总线的名称。
             * @example `sls-beijing-one1-tf`
             */
            EventBusName: string;
            /**
             * 事件规则的名称。
             * @example `rule-uKAK2`
             */
            RuleName: string;
        }[];
        /**
         * 如果还有多余的返回值则会返回NextToken。
         * @example `1`
         */
        NextToken: string;
        /**
         * 总条数。
         * @example `18`
         */
        Total: number;
    };
    /**
     * 接口返回码：
     * - Success：表示成功。
     * -  其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功。
     * - false：请求失败。
     * @example `true`
     */
    Success: boolean;
}
