export interface DescribeCategoryTemplateListResponse {
    /**
     * 分页查询时的页码。默认值：1。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `8491DBFD-48C0-4E11-B6FC-6F38921244A9`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。默认值：10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回的数据总条数。
     * @example `12`
     */
    TotalCount: number;
    /**
     * 行业模版列表。
     */
    Items: {
        /**
         * 当前风险等级ID。
         * @example `5`
         */
        CurrentRiskLevel: number;
        /**
         * 行业模板状态。取值：
         * - **0**：关闭状态。
         * - **1**：启用状态，用户当前主模板。
         * - **2**：活跃状态，启用、活跃状态的模板均可应用于识别任务。
         * - **3**：通用识别模型模板状态。
         * > 启用和活跃状态的模板，可作为[DescribeDataObjects](~~2399253~~)的行业模板ID入参。
         * @example `1`
         */
        Status: number;
        /**
         * 行业模板类型。
         * @example `6`
         */
        Type: number;
        /**
         * 行业模板是否支持编辑。取值：
         * - **0**：不支持。
         * - **1**：支持。
         * @example `0`
         */
        SupportEdit: number;
        /**
         * 最大分类层级。
         * @example `2`
         */
        MaxCategoryLevel: number;
        /**
         * 行业模板名称。
         * @example `built-in template`
         */
        Name: string;
        /**
         * 最大风险等级ID。
         * @example `5`
         */
        MaxRiskLevel: number;
        /**
         * 行业模板的唯一标志ID。
         * @example `1`
         */
        Id: number;
        /**
         * 行业模板的描述信息。
         * @example `description`
         */
        Description: string;
        /**
         * 行业模板创建时间。
         * @example `1582992000000`
         */
        GmtCreate: number;
        /**
         * 行业模板修改时间。
         * @example `1545277010000`
         */
        GmtModified: number;
    }[];
}
