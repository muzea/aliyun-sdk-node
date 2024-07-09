export interface CreateConsumerGroupRequest {
    /**
     * 实例ID。
     * @example `alikafka_post-cn-0pp1l9z8****`
     */
    "InstanceId": string;
    /**
     * Group名称。取值：
     * - 只能包含字母、数字、短划线（-）、下划线（_），且至少包含一个英文或数字。
     * - 长度限制在3～128字符，多于128字符将被自动截取。
     * - Group名称一旦创建后，将不能修改。
     * @example `test`
     */
    "ConsumerId": string;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 备注。
     * @example `test`
     */
    "Remark"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * - N为1~20。
         * - 不允许为空。
         * - 最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。
         * - N为1~20。
         * - 可以为空。
         * - 最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
