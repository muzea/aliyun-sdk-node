export interface DescribeStrategyDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C5B28F65-9245-5DC1-B3CF-5F2756A756A8`
     */
    RequestId: string;
    /**
     * 策略的信息。
     */
    Strategy: {
        /**
         * 策略类型。取值：
         * - **1**：标准策略
         * - **2**：自定义策略
         * @example `1`
         */
        Type: number;
        /**
         * 策略的检测周期。
         * @example `3`
         */
        CycleDays: number;
        /**
         * 策略名称。
         * @example `TestStrategy`
         */
        Name: string;
        /**
         * 策略ID。
         * @example `123`
         */
        Id: number;
        /**
         * 策略的检测周期。取值：
         * - **0**：0：00~06：00
         * - **6**：6：00~12：00
         * - **12**：12：00~18：00
         * - **18**：18：00~24：00
         * @example `0`
         */
        CycleStartTime: number;
        /**
         * 风险项白名单列表。
         */
        RiskTypeWhiteListQueryResultList: {
            /**
             * 检测项。
             * @example `hc_exploit`
             */
            TypeName: string;
            /**
             * 检测项别名。
             * @example `Unauthorized Access`
             */
            Alias: string;
            /**
             * 风险项是否选中。取值：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            On: boolean;
            /**
             * 子风险项的列表。
             */
            SubTypes: {
                /**
                 * 子检测项类型名称。
                 * @example `hc_exploit_redis`
                 */
                TypeName: string;
                /**
                 * 检测项别名。
                 * @example `Redis unauthorized access high exploit vulnerability risk`
                 */
                Alias: string;
                /**
                 * 子风险项是否选中。取值：
                 * - **true**：是
                 * - **false**：否
                 * @example `false`
                 */
                On: boolean;
                /**
                 * 自定义检测项详情列表。
                 */
                CheckDetails: {
                    /**
                     * 检测项ID。
                     * @example `206`
                     */
                    CheckId: number;
                    /**
                     * 检测项。
                     * @example `Ensure password expiration period is set.`
                     */
                    CheckItem: string;
                    /**
                     * 检测项描述。
                     * @example `Set password expiration time, force regular modification of password, reduce password leakage and guess risk.Use non-password login (e.g. key pair) please ignore this item.`
                     */
                    CheckDesc: string;
                    /**
                     * 规则信息列表。
                     */
                    Rules: {
                        /**
                         * 规则是否可选。取值：
                         * - **1**：是
                         * - **0**：否
                         * @example `1`
                         */
                        Optional: number;
                        /**
                         * 规则描述。
                         * @example `Please customize the password expiration time detection standard as`
                         */
                        RuleDesc: string;
                        /**
                         * 规则的默认值。
                         * @example `2`
                         */
                        DefaultValue: number;
                        /**
                         * 规则ID。
                         * @example `login_unlock_deny_pam_faillock.must.cus`
                         */
                        RuleId: string;
                        /**
                         * 规则参数列表。
                         */
                        ParamList: {
                            /**
                             * 规则参数默认值。
                             * @example `7`
                             */
                            ParamDefaultValue: string;
                            /**
                             * 规则参数设置值。
                             * @example `7`
                             */
                            Value: string;
                            /**
                             * 规则参数名称。
                             * @example `range_val`
                             */
                            ParamName: string;
                            /**
                             * 规则参数最大值。
                             * @example `999`
                             */
                            MaxValue: number;
                            /**
                             * 规则参数类型。取值：
                             * - **1**：输入
                             * - **2**：选择
                             * @example `1`
                             */
                            ParamType: number;
                            /**
                             * 规则参数描述。
                             * @example `The setting value is 0 means no definition, 1 means success, 2 means failure, 3 means success and failure`
                             */
                            ParamDesc: string;
                            /**
                             * 规则参数最小值。
                             * @example `1`
                             */
                            MinValue: number;
                            /**
                             * 规则参数为选择类型时，规则参数的选项。
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
                 * @example `windows`
                 */
                SupportedOs: string;
            }[];
        }[];
        /**
         * 基线检查策略开始时间。
         * @example `02:00:00`
         */
        StartTime: string;
        /**
         * 基线检查策略执行结束时间。
         * @example `03:00:00`
         */
        EndTime: string;
        /**
         * 策略的类型。取值：
         * - **common**：标准策略
         * - **custom**：自定义策略
         * @example `common`
         */
        CustomType: string;
        /**
         * 策略生效资产的添加方式。取值：
         * - **groupId**：按照资产的分组添加。
         * - **uuid**：按照单个资产添加。
         * @example `groupId`
         */
        TargetType: string;
        /**
         * 基线检测项子类型。
         * @example `hc_nginx_linux,tomcat7,hc_mysql_ali,hc_docker`
         */
        RiskSubTypeName: string;
    };
}
