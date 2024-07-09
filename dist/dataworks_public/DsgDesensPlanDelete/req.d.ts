export interface DsgDesensPlanDeleteRequest {
    /**
     * 脱敏规则的ID集合。
     */
    "Ids": number[];
    /**
     * 脱敏规则所属的一级脱敏场景Code。取值如下：
     * - 数据开发/数据地图展示脱敏：dataworks_display_desense_code
     * - MaxCompute引擎层脱敏：maxcompute_desense_code
     * - MaxCompute引擎层脱敏（新）：maxcompute_new_desense_code
     * - Hologres引擎层脱敏：hologres_display_desense_code
     * - 数据集成静态脱敏：dataworks_data_integration_desense_code
     * - 数据分析展示脱敏：dataworks_analysis_desense_code
     * @example `dataworks_display_desense_code`
     */
    "SceneCode": string;
}
