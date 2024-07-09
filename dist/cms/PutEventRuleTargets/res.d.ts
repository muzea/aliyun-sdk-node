export interface PutEventRuleTargetsResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `409C64DA-CF14-45DF-B463-471C790DD15A`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误参数数量统计。
     * @example `2`
     */
    FailedParameterCount: string;
    FailedContactParameters: {
        /**
         * 如果规则发送目标中包含创建错误的报警联系人组，则返回此参数。
         */
        ContactParameter: {
            /**
             * 报警联系人组的名称。
             * @example `默认报警联系人组`
             */
            ContactGroupName: string;
            /**
             * 规则发送目标的ID。
             * @example `2`
             */
            Id: number;
            /**
             * 报警通知级别。取值：
             * <props="china">- 2：电话、短信、钉钉、邮箱</props>
             * <props="china">- 3：短信、钉钉、邮箱</props>
             * <props="china">- 4：钉钉、邮箱</props>
             * <props="intl">4：钉钉、邮箱</props>
             * <props="partner">4：钉钉、邮箱</props>
             * @example `4`
             */
            Level: string;
        }[];
    };
    FailedMnsParameters: {
        /**
         * 如果规则发送目标中包含创建错误的消息服务，则返回此参数。
         */
        MnsParameter: {
            /**
             * 队列的名称。
             * @example `testQueue`
             */
            Queue: string;
            /**
             * 规则发送目标的ID。
             * @example `2`
             */
            Id: number;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            Region: string;
        }[];
    };
    FailedFcParameters: {
        /**
         * 如果规则发送目标中包含创建错误的函数服务，则返回此参数。
         */
        FcParameter: {
            /**
             * 函数服务的名称。
             * @example `serviceTest1`
             */
            ServiceName: string;
            /**
             * 函数名称。
             * @example `functionTest1`
             */
            FunctionName: string;
            /**
             * 规则发送目标的ID。
             * @example `1`
             */
            Id: number;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            Region: string;
        }[];
    };
}
