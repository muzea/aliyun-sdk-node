export interface ListIntegrationResponse {
    /**
     * 请求ID。
     * @example `34ED024E-9E31-434A-9E4E-D9D15C3****`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 查询到的告警集成总数。
         * @example `1`
         */
        Total: number;
        /**
         * 每页展示数量。
         * @example `10`
         */
        Size: number;
        /**
         * 查询的页数。
         * @example `1`
         */
        Page: number;
        /**
         * 告警集成信息。
         */
        Integrations: {
            /**
             * 集成ID。
             * @example `1234`
             */
            IntegrationId: number;
            /**
             * 集成名称。
             * @example `云监控集成`
             */
            IntegrationName: string;
            /**
             * 集成产品类型：
             * - CLOUD_MONITOR：云监控
             * - LOG_SERVICE：日志服务
             * @example `CLOUD_MONITOR`
             */
            IntegrationProductType: string;
            /**
             * 集成地址。
             * @example `https://alerts.aliyuncs.com/api/v1/integrations/custom/ymQBN******`
             */
            ApiEndpoint: string;
            /**
             * 集成Token。
             * @example `ymQBN******`
             */
            ShortToken: string;
            /**
             * 告警集成是否启用：
             * - true
             * - false
             * @example `true`
             */
            State: boolean;
            /**
             * 告警集成活跃度。
             * @example `ready`
             */
            Liveness: string;
            /**
             * 告警集成创建时间。
             * @example `2022-06-18`
             */
            CreateTime: string;
            /**
             * 集成详情对象信息。
             */
            IntegrationDetail: {
                /**
                 * 告警集成描述信息。
                 * @example `测试`
                 */
                Description: string;
                /**
                 * 去重的字段。
                 * @example `LABEL.alertname::LABEL.severity`
                 */
                DuplicateKey: string;
                /**
                 * 告警事件是否自动恢复：
                 * - true（默认）
                 * - false
                 * @example `true`
                 */
                AutoRecover: boolean;
                /**
                 * 告警事件自动恢复时间，默认时间为300秒。
                 * @example `300`
                 */
                RecoverTime: number;
                /**
                 * 最近1小时总数及异常数。
                 */
                Stat: number[];
                /**
                 * 固定映射字段。
                 */
                FieldRedefineRules: any[];
                /**
                 * 拓展映射字段。
                 */
                ExtendedFieldRedefineRules: any[];
                /**
                 * 告警事件恢复字段。系统收到恢复事件后会根据恢复事件中的字段查询告警事件进行恢复。
                 * > 仅日志服务支持设置此参数。
                 * @example `$.status`
                 */
                InitiativeRecoverField: string;
                /**
                 * 告警事件恢复字段值。系统收到恢复事件后会根据恢复事件中的字段查询告警事件进行恢复。
                 * > 仅日志服务支持设置此参数。
                 * @example `ok`
                 */
                InitiativeRecoverValue: string;
            };
        }[];
    };
}
