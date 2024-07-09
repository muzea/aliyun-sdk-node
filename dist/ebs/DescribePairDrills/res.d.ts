export interface DescribePairDrillsResponse {
    /**
     * 复制对容灾演练的信息组成的集合。
     */
    Drills: {
        /**
         * 演练ID。
         * @example `drill-xxx`
         */
        DrillId: string;
        /**
         * 演练状态。可能值：
         * - execute_failed：执行失败。
         * - executed：已执行。
         * - executing：执行中。
         * - clear_failed：清理失败。
         * - clearing：清理中。
         * @example `executing`
         */
        Status: string;
        /**
         * 演练盘ID。
         * @example `d-xxx`
         */
        DrillDiskId: string;
        /**
         * 演练盘状态，可能值：
         * - created：已创建。
         * - deleted：已删除。
         * - creating：创建中。
         * - deleting：删除中。
         * > 除演练盘状态外，还可以展示演练盘创建或删除失败的错误码详情。
         * @example `created`
         */
        DrillDiskStatus: string;
        /**
         * 演练启动时间。该参数以时间戳的形式提供返回值。单位：秒。
         * @example `1690855888`
         */
        StartAt: number;
        /**
         * 该演练对应的恢复点。该参数以时间戳的形式提供返回值。单位：秒。
         * @example `1690855931`
         */
        RecoverPoint: number;
        /**
         * 任务执行失败的错误提示信息。
         * @example `PAIR_SYNCPOINT_NOT_FOUND`
         */
        StatusMessage: string;
    }[];
    /**
     * 本次调用返回的查询凭证（Token）。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 分页模式查询时的页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页模式查询时的单页记录数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页查询时的结果总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `C46FF5A8-C5F0-4024-8262-B16B6392****`
     */
    RequestId: string;
}
