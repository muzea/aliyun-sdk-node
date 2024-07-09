export interface DescribeImageBaselineCheckResultResponse {
    /**
     * 本次请求的ID。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413****`
     */
    RequestId: string;
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询结果的总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `10`
         */
        Count: number;
    };
    /**
     * 镜像基线检查列表详情。
     */
    BaselineResult: {
        /**
         * 基线风险的修复状态。取值：
         * - **0**：未修复
         * - **1**：已修复
         * @example `1`
         */
        Status: number;
        /**
         * 关联的低危镜像数。
         * @example `10`
         */
        LowRiskItemCount: number;
        /**
         * 基线的风险等级。取值：
         * - **high**：高危
         * - **medium**：中危
         * - **low**：低危
         * @example `high`
         */
        BaselineNameLevel: string;
        /**
         * 最新扫描的时间戳，单位为毫秒。
         * @example `1610304058301`
         */
        LastScanTime: number;
        /**
         * 关联的中危镜像数。
         * @example `1`
         */
        MiddleRiskItemCount: number;
        /**
         * 基线项的名称key。
         * @example `identification`
         */
        BaselineNameKey: string;
        /**
         * 基线检查项个数。
         * @example `5`
         */
        BaselineItemCount: number;
        /**
         * 基线项的别名。
         * @example `身份鉴别`
         */
        BaselineNameAlias: string;
        /**
         * 基线项的类型key。
         * @example `identification`
         */
        BaselineClassAlias: string;
        /**
         * 首次扫描的时间戳，单位为毫秒。
         * @example `1610304058366`
         */
        FirstScanTime: number;
        /**
         * 关联的高危镜像数。
         * @example `1`
         */
        HighRiskItemCount: number;
    }[];
}
