export interface DescribeRiskTypeResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F22037B5-FCE4-5178-A9E7-71798E1F9270`
     */
    RequestId: string;
    /**
     * 基线类型信息集合。
     */
    RiskTypes: {
        /**
         * 基线类型名称。
         * @example `hc_exploit`
         */
        TypeName: string;
        /**
         * 基线类型别名。
         * @example `Redis unauthorized access high exploit vulnerability risk`
         */
        Alias: string;
        /**
         * 基线信息集合。
         */
        SubTypes: {
            /**
             * 基线子类型名称。
             * @example `hc_exploit_redis`
             */
            TypeName: string;
            /**
             * 基线子类型别名。
             * @example `Redis unauthorized access high exploit vulnerability risk`
             */
            Alias: string;
            /**
             * 基线子类型的检查详情集合。
             */
            CheckDetails: {
                /**
                 * 基线子类型的检测项唯一主键。
                 * @example `1299`
                 */
                CheckId: number;
                /**
                 * 基线子类型的检测项。
                 * @example `Ensure password expiration period is set.`
                 */
                CheckItem: string;
                /**
                 * 基线子类型的检测项描述。
                 * @example `Set password expiration time, force regular modification of password, reduce password leakage and guess risk.Use non-password login (e.g. key pair) please ignore this item.`
                 */
                CheckDesc: string;
                /**
                 * 基线子类型的检测项规则详情集合。
                 */
                Rules: {
                    /**
                     * 基线子类型的检测项是否支持编辑。取值：
                     * - **0**：否
                     * - **1**：是
                     * @example `1`
                     */
                    Optional: number;
                    /**
                     * 基线子类型的检测项规则描述。
                     * @example `Please customize the password expiration time detection standard as`
                     */
                    RuleDesc: string;
                    /**
                     * 基线子类型的检测项规则编号。
                     * @example `audit.audit_policy.auditpolicychange.cus`
                     */
                    RuleId: string;
                    /**
                     * 基线子类型的检测项的规则参数集合。
                     */
                    ParamList: {
                        /**
                         * 自定义检测项支持配置参数的默认值。
                         * @example `7`
                         */
                        ParamDefaultValue: string;
                        /**
                         * 基线子类型的检测项的规则参数名称。
                         * @example `range_val`
                         */
                        ParamName: string;
                        /**
                         * 基线子类型的检测项的规则参数的最大值。
                         * @example `999`
                         */
                        MaxValue: number;
                        /**
                         * 基线子类型的检测项的规则参数的配置类型。取值：
                         * - **1**：输入
                         * - **2**：选择
                         * @example `1`
                         */
                        ParamType: number;
                        /**
                         * 基线子类型的检测项的规则的参数描述。
                         * @example `The setting value is 0 means no definition, 1 means success, 2 means failure, 3 means success and failure`
                         */
                        ParamDesc: string;
                        /**
                         * 基线子类型的检测项的规则的参数最小值。
                         * @example `1`
                         */
                        MinValue: number;
                        /**
                         * paramType取值为1时，此值为空。
                         * paramType取值为2时，此值表示可选项。
                         * @example `0,1,2,3`
                         */
                        EnumValue: string;
                    }[];
                }[];
            }[];
            /**
             * 支持的操作系统。取值：
             * - **windows**
             * - **linux**
             * @example `linux`
             */
            SupportedOs: string;
            /**
             * 当前用户版本是否有基线的权限。取值：
             * - **true**：有权限
             * - **false**：无权限
             * @example `true`
             */
            AuthFlag: boolean;
        }[];
        /**
         * 当前用户版本是否有分类的权限。取值：
         * - **true**：有权限
         * - **false**：无权限
         * @example `true`
         */
        AuthFlag: boolean;
    }[];
}
