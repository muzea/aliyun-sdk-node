export interface DescribeSystemLogResponse {
    /**
     * 查询到的弹性业务带宽出账日志的总数量。
     * @example `1`
     */
    Total: number;
    /**
     * 本次请求的ID。
     * @example `8BC3A33A-F832-58DB-952F-7682A25AD14C`
     */
    RequestId: string;
    /**
     * 弹性业务带宽出账日志的详情列表。
     */
    SystemLog: {
        /**
         * 账单的状态。取值：
         * - **0**：表示待出账。
         * - **1**：表示已出账。
         * - **2**：表示终止出账。
         * @example `1`
         */
        Status: number;
        /**
         * 系统日志的类型。取值固定为**20**，表示弹性业务带宽出账日志。
         * @example `20`
         */
        EntityType: number;
        /**
         * DDoS高防实例的IP地址。
         * @example `203.107.XX.XX`
         */
        EntityObject: string;
        /**
         * 账单的创建时间。使用时间戳表示，单位：毫秒。
         * @example `1631793531000`
         */
        GmtCreate: number;
        /**
         * 操作类型。取值固定为**100**，表示新增弹性业务带宽出账记录。
         * @example `100`
         */
        OpAction: number;
        /**
         * 账单最后一次被修改的时间。使用时间戳表示，单位：毫秒。
         * @example `1635425407000`
         */
        GmtModified: number;
        /**
         * 账单所属阿里云账号的ID。
         * @example `171986973287****`
         */
        OpAccount: string;
        /**
         * 账单详情。使用JSON结构体转化的字符串表示，JSON结构体包含以下字段：
         * - **newEntity**：Object类型，表示账单记录，具体包含以下字段：
         *     - **billValue**：Integer类型 | 计费月份的弹性业务带宽用量，单位：Mbps。
         *     - **instanceId**：String类型 | DDoS高防实例的ID。
         *     - **ip**：String类型 | DDoS高防实例的IP地址。
         *     - **maxBw**：String类型 | 计费月份的实际业务流量峰值（月95峰值），单位：Mbps。
         *     - **month**：Long类型 | 账单出具月份（计费月份为账单出具月份的上个自然月），使用时间戳表示，单位：毫秒。
         *     - **overBandwidth**：Integer类型 | 实际业务流量峰值超出实例业务带宽规格的带宽大小，单位：Mbps。
         *     - **peakTime**：Long类型 | 实际业务流量峰值的计量时刻，使用时间戳表示，单位：秒。
         *     - **startTimestamp**：Long类型 | 实例业务流量峰值区间的起始时刻，使用时间戳表示，单位：秒。
         * @example `{"newEntity":{"billValue":"60","instanceId":"ddoscoo-cn-zz121ogz****","ip":"203.107.XX.XX","maxBw":"300","month":1627747200000,"overBandwidth":"120","peakTime":1629871200,"startTimestamp":1629871200}}`
         */
        OpDesc: string;
    }[];
}
