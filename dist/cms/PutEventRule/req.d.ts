export interface PutEventRuleRequest {
    /**
     * 事件报警规则名称。
     * @example `myRuleName`
     */
    "RuleName": string;
    /**
     * 事件报警规则所属的应用分组ID。
     * @example `7378****`
     */
    "GroupId"?: string;
    /**
     * 事件报警规则的类型。取值：
     * - SYSTEM：系统事件。
     * - CUSTOM：自定义事件。
     * @example `SYSTEM`
     */
    "EventType"?: string;
    /**
     * 事件报警规则的描述。
     * @example `事件报警测试`
     */
    "Description"?: string;
    /**
     * 事件报警规则的状态。取值：
     * - ENABLED：启用。
     * - DISABLED：禁用。
     * @example `ENABLED`
     */
    "State"?: string;
    /**
     * 事件报警规则的模式。
     */
    "EventPattern": {
        /**
         * 事件报警规则的类型。N的取值范围：1~50。取值：
         * - StatusNotification：故障通知。
         * - Exception：异常。
         * - Maintenance：运维。
         * - *：无限制。
         * @example `Exception`
         */
        EventTypeList: string[];
        /**
         * 事件报警规则的状态。N的取值范围：1~50。
         * @example `Failed`
         */
        StatusList: string[];
        /**
         * 云服务类型。N的取值范围：1~50。
         * >关于事件报警规则支持的云服务，请参见[DescribeSystemEventMetaList](~~114972~~)。
         * @example `ecs`
         */
        Product: string;
        /**
         * 事件报警规则的等级。N的取值范围：1~50。取值：
         * - CRITICAL：严重。
         * - WARN：警告。
         * - INFO：信息。
         * - *：所有等级。
         * @example `CRITICAL`
         */
        LevelList: string[];
        /**
         * 事件报警规则的名称。N的取值范围：1~50。
         * @example `Agent_Status_Stopped`
         */
        NameList: string[];
        /**
         * 事件过滤关键字。当事件内容包含该关键字时，自动触发报警。
         * @example `Stopping`
         */
        CustomFilters: string;
        /**
         * SQL事件过滤。当事件内容满足SQL条件时，自动触发报警。
         * > SQL事件过滤的语法与日志服务SLS的查询语法保持一致。
         * @example `192.168.XX.XX and Executed`
         */
        SQLFilter: string;
    }[];
    /**
     * 通道沉默时间。单位：秒。
     * @example `86400`
     */
    "SilenceTime"?: number;
}
