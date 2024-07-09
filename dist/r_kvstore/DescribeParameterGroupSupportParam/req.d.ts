export interface DescribeParameterGroupSupportParamRequest {
    /**
     * 产品类别，取值：
     * - **standard**：社区版
     * - **enterprise**：Tair（Redis企业版）
     * @example `standard`
     */
    "Category"?: string;
    /**
     * 引擎兼容版本。
     * @example `5.0`
     */
    "EngineVersion": string;
    /**
     * 引擎类型，取值：
     * - **redis**：Redis或Tair内存型。
     * - **tair_pena**：Tair持久内存型。
     * - **tair_pdb**：Tair云盘（ESSD）型。
     * @example `redis`
     */
    "EngineType"?: string;
}
