export interface DescribeSQLPlansResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 执行计划列表信息。
     */
    SQLPlans: {
        /**
         * 命中次数。
         * @example `3`
         */
        HitCount: number;
        /**
         * Outline 数据。
         * @example `/*+ BEGIN_OUTLINE_DATA FULL(@\"SEL$1\" \"testdb1.bmsql_order_line\"@\"SEL$1\") END_OUTLINE_DATA*​/`
         */
        OutlineData: string;
        /**
         * 平均执行时间 (ms)。
         * @example `1`
         */
        AvgExecutionMS: number;
        /**
         * SQL 执行计划在诊断系统内部的唯一标识。
         * @example `859ef7ee****b23ac98cdeb2476f****`
         */
        PlanUnionHash: string;
        /**
         * OutlineID。
         * @example `-1`
         */
        OutlineId: number;
        /**
         * 数据库使用此执行计划的平均执行时间，单位毫秒。
         * @example `288`
         */
        AvgExecutionTimeMS: number;
        /**
         * SQL 执行计划在数据库内部的 ID。
         * @example `9114`
         */
        PlanId: number;
        /**
         * 绑定时间。
         * @example `1641492303000`
         */
        OutlineTime: number;
        /**
         * 绑定时间（零时区）。
         * @example `2022-01-06T18:05:03Z`
         */
        OutlineTimeUTCString: string;
        /**
         * SQL 的完整执行计划。
         * @example `PHY_TABLE_SCAN | bmsql_order_line | 40 ******`
         */
        PlanFull: string;
        /**
         * 节点 IP。
         * @example `i-bp16niirq4zdmgvm****`
         */
        NodeIp: string;
        /**
         * 合并版本。
         * @example `132`
         */
        MergedVersion: number;
        /**
         * 查询 sql。
         * @example `SELECT ol_i_id, ***, *** FROM aaa`
         */
        QuerySQL: string;
        /**
         * 首次加载时间（零时区）。
         * @example `2022-01-06T18:05:03Z`
         */
        FirstLoadTimeUTCString: string;
        /**
         * 首次加载时间。
         * @example `1641492303000`
         */
        FirstLoadTime: number;
        /**
         * 计划信息。
         * @example `PHY_TABLE_SCAN`
         */
        PlanInfo: string;
    }[];
}
