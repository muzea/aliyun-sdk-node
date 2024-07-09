export interface BatchUpdateMaliciousFileWhitelistConfigRequest {
    /**
     * 无代理检测敏感文件告警加白规则列表。
     */
    "ConfigList"?: {
        /**
         * 无代理检测敏感文件告警加白规则ID，可选，不传代表新增规则。可调用[ListMaliciousFileWhitelistConfigs](~~ListMaliciousFileWhitelistConfigs~~)获取敏感文件加白规则的ID。
         * @example `1`
         */
        ConfigId: number;
        /**
         * 告警名称：
         * - **ALL**： 全部告警类型
         * @example `ALL`
         */
        EventName: string;
        /**
         * 敏感文件告警中用于加白判定的字段。
         * @example `fileMd5`
         */
        Field: string;
        /**
         * 规则判定操作符：
         * - strEqual：字符串相等
         * @example `strEqual`
         */
        Operator: string;
        /**
         * 预期加白的字段值。
         * @example `b2cf9747ee49d8d9b105cf16e078cc16`
         */
        FieldValue: string;
        /**
         * 生效目标类型：
         * - ALL：全部资产
         * - SELECTION_KEY：通过资产选择组件选中的资产
         * @example `ALL`
         */
        TargetType: string;
        /**
         * 目标生效范围：
         * - ALL：全部资产
         * - 其他：资产选择组件选中的资产范围Key
         * @example `ALL`
         */
        TargetValue: string;
        /**
         * 业务来源：
         * - agentless：无代理检测
         * @example `agentless`
         */
        Source: string;
    }[];
}
