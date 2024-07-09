export interface DescribeImageBaselineCheckSummaryResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5BD95679-D63A-4151-97D0-188432F4A57`
     */
    RequestId: string;
    /**
     * 分页查询时页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的镜像基线检查结果的数量。默认值为**20**，表示每页显示20条镜像基线检查结果。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询结果的总数。
         * @example `3`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `3`
         */
        Count: number;
    };
    /**
     * 镜像基线检查列表详情。
     */
    BaselineResultSummary: {
        /**
         * 基线风险的修复状态。取值：
         * - **0**：未修复
         * - **1**：已修复
         * - **2**：待验证
         * - **3**：修复失败
         * @example `0`
         */
        Status: number;
        /**
         * 存在基线风险问题的风险等级为**中危**镜像的数量。
         * @example `0`
         */
        MiddleRiskImage: number;
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
         * @example `1626628760000`
         */
        LastScanTime: number;
        /**
         * 存在基线风险问题的风险等级为**高危**镜像的数量。
         * @example `15`
         */
        HighRiskImage: number;
        /**
         * 基线名称的关键字。
         * @example `hc_image_exploit`
         */
        BaselineNameKey: string;
        /**
         * 基线分类的关键字。
         * @example `hc_image_exploit`
         */
        BaselineClassKey: string;
        /**
         * 基线名称。
         * @example `Unauthorized access`
         */
        BaselineNameAlias: string;
        /**
         * 基线分类。
         * @example `Unauthorized access`
         */
        BaselineClassAlias: string;
        /**
         * 首次扫描的时间戳，单位为毫秒。
         * @example `1626628760000`
         */
        FirstScanTime: number;
        /**
         * 存在基线风险问题的风险等级为**低危**镜像的数量。
         * @example `0`
         */
        LowRiskImage: number;
    }[];
}
