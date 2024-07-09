export interface DescribeWhiteRuleListResponse {
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 分页记录。
         */
        PageInfo: {
            /**
             * 列表当前页号。
             * @example `1`
             */
            CurrentPage: number;
            /**
             * 每页返回记录数。
             * @example `10`
             */
            PageSize: number;
            /**
             * 记录总数。
             * @example `100`
             */
            TotalCount: number;
        };
        /**
         * 详细数据。
         */
        ResponseData: {
            /**
             * 加白规则唯一ID。
             * @example `123456789`
             */
            Id: number;
            /**
             * 创建时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtModified: string;
            /**
             * 开通威胁分析的阿里云账号ID。
             * @example `127608589417****`
             */
            Aliuid: number;
            /**
             * 创建规则的阿里云账号ID。
             * @example `176555323***`
             */
            SubAliuid: number;
            /**
             * 告警类型。
             * @example `scan`
             */
            AlertType: string;
            /**
             * 告警类型标识。
             * @example `scan`
             */
            AlertTypeId: string;
            /**
             * 告警名称。
             * @example `Try SNMP weak password`
             */
            AlertName: string;
            /**
             * 告警名称标识。
             * @example `Try SNMP weak password`
             */
            AlertNameId: string;
            /**
             * 规则启用状态。 取值：
             * - 1：开启
             * - 0：关闭
             * @example `1`
             */
            Status: number;
            /**
             * 事件全局唯一UUID。
             * @example `85ea4241-798f-4684-a876-65d4f0c3****`
             */
            IncidentUuid: string;
            /**
             * 告警UUID。
             * @example `sas_71e24437d2797ce8fc59692905a4****`
             */
            AlertUuid: string;
            /**
             * 规则集 json数组格式。
             * @example `[{"conditions":[{"isNot":false,"itemId":0,"left":{"value":"host_uuid.host_name"},"operator":"containsString","right":{"value":"Cloud-MCH"}}]}]`
             */
            Expression: {
                /**
                 * 条件逻辑关系。
                 * @example `(1&2)|(3&4)`
                 */
                Logic: string;
                /**
                 * 规则表达式数组。
                 */
                Conditions: {
                    /**
                     * 条件ID。
                     * @example `1`
                     */
                    ItemId: number;
                    /**
                     * 分派规则条件聚合方式。
                     * - `=`：等于
                     * - `<>`：不等于
                     * - `in`：包含
                     * - `not in`：不包含
                     * - `REGEXP`：匹配正则
                     * - `NOT REGEXP`：正则不匹配
                     * @example `REGEXP`
                     */
                    Operator: string;
                    /**
                     * 对结果是否取反。 取值：
                     * - true：取反
                     * - false：不取反
                     * @example `false`
                     */
                    IsNot: boolean;
                    /**
                     * 条件左值。
                     */
                    Left: {
                        /**
                         * 左值变量名称。
                         * @example `ip`
                         */
                        Value: string;
                        /**
                         * 是否是变量。
                         * - true：变量
                         * - false：常量
                         * @example `true`
                         */
                        IsVar: boolean;
                        /**
                         * 是否是常量。取值：
                         * - true：是
                         * - false：否
                         * @example `false`
                         */
                        Type: string;
                        /**
                         * 备注信息。
                         * @example `length`
                         */
                        Modifier: string;
                        /**
                         * 备注信息键值对。
                         */
                        ModifierParam: any;
                    };
                    /**
                     * 右值对象。
                     */
                    Right: {
                        /**
                         * 右值。
                         * @example `12345`
                         */
                        Value: string;
                        /**
                         * 指定右变量值是常量，还是运行时变量（从运行时上下文中获取具体值）。
                         * - true：运行时变量
                         * - false：常量
                         * @example `false`
                         */
                        IsVar: boolean;
                        /**
                         * 数据类型。
                         * @example `String`
                         */
                        Type: string;
                        /**
                         * 备注信息。
                         * @example `length`
                         */
                        Modifier: string;
                        /**
                         * 备注信息键值对。
                         */
                        ModifierParam: any;
                    };
                }[];
            };
        }[];
    };
}
