export interface ListAlertEventsResponse {
    /**
     * 请求ID。
     * @example `2FC13182-B9AF-4E6B-BE51-72669B7C****`
     */
    RequestId: string;
    /**
     * 返回结构体
     */
    PageBean: {
        /**
         * 查询总数。
         * @example `24`
         */
        Total: number;
        /**
         * 查询到的页数。
         * @example `1`
         */
        Page: number;
        /**
         * 每页展示数目。
         * @example `20`
         */
        Size: number;
        /**
         * 告警事件历史信息组。
         */
        Events: {
            /**
             * 告警名称。
             * @example `测试触发的告警`
             */
            AlertName: string;
            /**
             * 告警等级：
             * - critical：p1
             * -  error：p2
             * - warning：p3
             * - page：p4
             * - default：p6
             * @example `critical`
             */
            Severity: string;
            /**
             * 事件状态。
             * - Active：正在发生
             * - Silenced：被静默
             * - Resolved：已解决
             * @example `Active`
             */
            Status: string;
            /**
             * 开始时间。
             * @example `2021-12-20 17:42:16`
             */
            StartTime: string;
            /**
             * 结束时间。
             * @example `2021-12-20 17:42:16`
             */
            EndTime: string;
            /**
             * 事件接收时间。
             * @example `2021-12-20 17:42:16`
             */
            ReceiveTime: string;
            /**
             * 集成名称。
             * @example `自定义集成`
             */
            IntegrationName: string;
            /**
             * 集成类型。
             * @example `CUSTOM`
             */
            IntegrationType: string;
            /**
             * 事件地址。
             * @example `https://xxx.xx/`
             */
            GeneratorURL: string;
            /**
             * 事件描述。
             * @example `测试`
             */
            Description: string;
            /**
             * 注释列表。
             * @example `[{\"Name\":\"annotation-a\",\"Value\":\"annotation a value\"}]`
             */
            Annotations: string;
            /**
             * 标签列表。
             * @example `[{\"name\":\"severity\",\"value\":\"error\"}]`
             */
            Labels: string;
            /**
             * 关联告警。
             */
            Alarms: {
                /**
                 * 告警ID。
                 * @example `77444`
                 */
                AlarmId: number;
                /**
                 * 告警名称。
                 * @example `测试触发的告警`
                 */
                AlarmName: string;
                /**
                 * 告警状态：
                 * - 0：待处理
                 * - 1：处理中
                 * - 2：已解决
                 * @example `0`
                 */
                State: number;
                /**
                 * 告警创建时间。
                 * @example `2021-12-20 07:10:18`
                 */
                CreateTime: string;
            }[];
            /**
             * 处理人。
             * @example `张三`
             */
            HandlerName: string;
            /**
             * 关联的通知策略
             */
            NotificationPolicies: {
                /**
                 * 通知策略ID
                 * @example `646093`
                 */
                Id: number;
                /**
                 * 通知策略名称
                 * @example `P1告警通知策略`
                 */
                Name: string;
            }[];
            /**
             * 触发次数
             * @example `10`
             */
            TriggerCount: number;
        }[];
    };
}
