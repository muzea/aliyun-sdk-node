export interface DescribeImageBaselineItemListResponse {
    /**
     * 本次请求的ID。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413****`
     */
    RequestId: string;
    /**
     * 查询结果的分页信息。
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
         * 查询到的数据总条数。
         * @example `253`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 镜像基线数据列表。
     */
    BaselineItemInfos: {
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
         * 基线检查项的白名单状态。
         * - **0**：未加白
         * - **1**：已加白
         * @example `0`
         */
        WhiteList: number;
        /**
         * 基线主项名称的key。
         * @example `ak_leak`
         */
        BaselineNameKey: string;
        /**
         * 基线子项的别名。
         * @example `Access Key泄漏`
         */
        BaselineItemAlias: string;
        /**
         * 基线主项分类的key。
         * @example `ak_leak`
         */
        BaselineClassKey: string;
        /**
         * 基线主项分类的别名。
         * @example `Access Key泄漏`
         */
        BaselineClassAlias: string;
        /**
         * 基线主项名称的别名。
         * @example `Access Key泄漏`
         */
        BaselineNameAlias: string;
        /**
         * 基线子项的key。
         * @example `ak_leak`
         */
        BaselineItemKey: string;
    }[];
}
