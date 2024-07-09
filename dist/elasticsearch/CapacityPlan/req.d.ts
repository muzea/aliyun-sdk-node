export interface CapacityPlanRequest {
    /**
     * 请求参数信息。
     */
    "body"?: {
        /**
         * 是否具有复杂聚合查询的需求。可选值：
         * - true：是
         * - false（默认）：否
         * @example `true`
         */
        complexQueryAvailable: boolean;
        /**
         * 磁盘使用情况。
         */
        dataInfo: {
            /**
             * 磁盘数据指标代码。可选值：
             * - totalRawData：源数据信息
             * - document：数据文档信息，预估文档数
             * - dailyIncrement：数据每日增长量
             * - dailyIncrement：每日增量文档数
             * - retentionTime：数据保留时长
             * - replica：副本设置
             * @example `totalRawData`
             */
            code: string;
            /**
             * 磁盘使用情况指标数值。
             * @example `100`
             */
            size: number;
            /**
             * 磁盘数据类型，可选值：
             * - hot：热数据
             * - warm：冷数据
             * @example `hot`
             */
            type: string;
            /**
             * 数据单位或时间单位，可选值：
             * - 数据单位：MiB、GiB、TB、PB
             * - 时间单位：DAYS、WEEKS、MONTHS、YEARS
             * @example `MiB`
             */
            unit: string;
            /**
             * 数据总条数。
             * @example `10000`
             */
            totalCount: number;
        }[];
        /**
         * 磁盘使用情况、搜索和写入情况、聚合请求等指标信息。
         */
        metric: {
            /**
             * 搜索或写入指标代码。可选值：
             * - write：写入
             * - search：搜索
             * @example `write`
             */
            code: string;
            /**
             * 并发数。
             * @example `2`
             */
            concurrent: number;
            /**
             * 吞吐量，单位：MB/S。
             * @example `100`
             */
            throughput: number;
            /**
             * 搜索/写入峰值类型。可选值：
             * - common：常规
             * - peak：高峰
             * @example `common`
             */
            type: string;
            /**
             * 峰值QPS。
             * @example `30`
             */
            peakQps: number;
            /**
             * 平均QPS。
             * @example `30`
             */
            averageQps: number;
            /**
             * 期望平均响应时间，单位：毫秒。
             * @example `100`
             */
            responseTime: number;
        }[];
        /**
         * 使用场景，可选值：
         * - general：通用场景
         * - analysisVisualization：数据分析场景
         * - dbAcceleration：数据库加速场景
         * - search：搜索场景
         * - log：日志场景
         * @example `general`
         */
        usageScenario: string;
    };
}
