export interface ListHoneypotAlarmEventsResponse {
    /**
     * 告警事件列表。
     */
    HoneypotAlarmEvents: {
        /**
         * 事件ID。
         * @example `940272`
         */
        AlarmEventId: number;
        /**
         * 告警事件类型。
         * @example `Initial Access`
         */
        AlarmEventType: string;
        /**
         * 告警事件名称。
         * @example `Attack Honeypot`
         */
        AlarmEventName: string;
        /**
         * 告警事件的唯一标识。
         * @example `167e6fc0d931917d2059efcd1d00f6ab`
         */
        AlarmUniqueInfo: string;
        /**
         * 首次发现时间戳。单位：毫秒。
         * @example `1658193602000`
         */
        FirstTime: number;
        /**
         * 最新发现时间戳。单位：毫秒。
         * @example `1660610772000`
         */
        LastTime: number;
        /**
         * 风险等级。取值：
         * - **2**：低风险
         * - **3**：中风险
         * - **4**：高风险
         * @example `2`
         */
        RiskLevel: string;
        /**
         * 事件发生总数。
         * @example `11`
         */
        EventCount: number;
        /**
         * 告警事件的处理状态。
         * - **1**：待处理
         * - **2**：已忽略
         * - **4**：已确认
         * @example `1`
         */
        OperateStatus: number;
        /**
         * 风险概述列表。
         */
        MergeFieldList: {
            /**
             * 字段类型。内部字段，无需关注。
             * @example `level1_item3`
             */
            FieldType: string;
            /**
             * 字段的键。
             * @example `dest_ip_count`
             */
            FieldKey: string;
            /**
             * 字段键对应值。
             * @example `1`
             */
            FieldValue: string;
            /**
             * 字段键对应值扩展值。
             * @example `dest_ip_ext`
             */
            FieldExtInfo: string;
        }[];
    }[];
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 返回结果中显示的当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回数据每页显示的数据条数。默认值为100。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `69`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `513C9554-55A4-5504-B7C4-6E17EB4FC7A3`
     */
    RequestId: string;
}
