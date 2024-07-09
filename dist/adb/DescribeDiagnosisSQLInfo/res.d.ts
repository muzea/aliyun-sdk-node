export interface DescribeDiagnosisSQLInfoResponse {
    /**
     * SQL的执行详情，包括详细的SQL语句、统计信息、执行计划和算子信息等。
     * @example `{     "DiagnosisSQLInfo": {         "hasSharedStage": false,         "resourceGroup": "user_default",         "cost": 274,         "queuedTime": 0,         "outputDataSize": 9,         "scheduled": true,         "query": "/*+display=tpch_q14*​/SELECT 100.00 * SUM(CASE WHEN p_type LIKE 'PROMO%' THEN l_extendedprice * (1 - l_discount) ELSE 0 END) / SUM(l_extendedprice * (1 - l_discount)) AS promo_revenue FROM lineitem l, part p WHERE l_partkey = p_partkey AND l_shipdate &gt;= DATE '1995-09-01' AND l_shipdate &lt; DATE '1995-09-01' + INTERVAL '1' MONTH",         "outputRows": 1,         "userName": "test_user",         "parentId": 0,         "maxOutputRows": 200000,         "scanSize": 8247470,         "peakMemory": 13188295,         "startTime": 1626330527632,         "state": "FINISHED",         "endTime": 1626330527905,         "writeTableRows": 0,         "scanRows": 351966     } }`
     */
    DiagnosisSQLInfo: string;
    /**
     * 请求ID。
     * @example `1`
     */
    RequestId: string;
    /**
     * 查询的分阶段执行信息。
     */
    StageInfos: {
        /**
         * Stage总的输入行数。
         * @example `123`
         */
        InputRows: number;
        /**
         * Stage总的输入数据量，单位为Bytes。
         * @example `2341`
         */
        InputDataSize: number;
        /**
         * Stage总的输出行数。
         * @example `231`
         */
        OutputRows: number;
        /**
         * Stage总的输出数据量，单位为Bytes。
         * @example `12344`
         */
        OutputDataSize: number;
        /**
         * Stage总的峰值内存，单位为Bytes。
         * @example `3421`
         */
        PeakMemory: number;
        /**
         * Stage的算子累积耗时，单位为毫秒（ms）。
         * @example `2341`
         */
        OperatorCost: number;
        /**
         * StageID。
         * @example `Stage[26]`
         */
        StageId: string;
        /**
         * Stage状态。
         * @example `RUNNING`
         */
        State: string;
        /**
         * Stage的执行进度。
         * @example `0.3`
         */
        Progress: number;
    }[];
}
