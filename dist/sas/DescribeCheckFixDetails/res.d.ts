export interface DescribeCheckFixDetailsResponse {
    /**
     * 检查项修复参数列表。
     */
    CheckFixDetails: {
        /**
         * 检查项ID。
         * @example `58`
         */
        CheckId: number;
        /**
         * 检查项描述。
         * @example `Ensure password reuse is limited`
         */
        CheckItem: string;
        /**
         * 检查项详情说明。
         * @example `Force users not to reuse recently used passwords to reduce the risk of password guessing attacks`
         */
        CheckDesc: string;
        /**
         * 检查项支持的规则列表。
         */
        Rules: {
            /**
             * 规则id。
             * @example `pwd_reuse.system_auth`
             */
            RuleId: string;
            /**
             * 规则的描述信息。
             * @example `(/etc/system-auth)Force users not to reuse the number of recently used passwords between 5 and 24`
             */
            RuleDesc: string;
            /**
             * 变量名称。
             * @example `open`
             */
            VarName: string;
            /**
             * 规则的默认值。
             * @example `1`
             */
            DefaultValue: number;
            /**
             * 规则是否可选。取值：
             * - **1**：是
             * - **0**：否
             * @example `1`
             */
            Optional: number;
            /**
             * 检查项ID。
             * @example `58`
             */
            CheckId: number;
            /**
             * 规则参数设置值。
             * @example `5`
             */
            Value: number;
            /**
             * 规则参数信息列表。
             */
            ParamList: {
                /**
                 * 规则参数名称。
                 * @example `range_val`
                 */
                ParamName: string;
                /**
                 * 规则参数描述。
                 * @example `The setting value is 0 means no definition, 1 means success, 2 means failure, 3 means success and failure`
                 */
                ParamDesc: string;
                /**
                 * 规则参数默认值。
                 * @example `5`
                 */
                ParamDefaultValue: string;
                /**
                 * 规则参数类型。取值：
                 * - **1**：输入
                 * - **2**：选择
                 * @example `1`
                 */
                ParamType: number;
                /**
                 * 规则参数最小值。
                 * @example `5`
                 */
                MinValue: number;
                /**
                 * 规则参数最大值。
                 * @example `24`
                 */
                MaxValue: number;
                /**
                 * 规则参数为选择类型时，规则参数的选项。
                 * @example `0,1,2,3`
                 */
                EnumValue: string;
                /**
                 * 规则参数设置值。
                 * @example `18`
                 */
                Value: string;
                /**
                 * 规则ID。
                 * @example `pwd_reuse.system_auth`
                 */
                RuleId: string;
            }[];
        }[];
    }[];
    /**
     * 查询到的支持修复的检查项数量。
     * @example `20`
     */
    Count: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0DBF1E27-98D8-5EC2-9CF3-4A2E26F6****`
     */
    RequestId: string;
}
