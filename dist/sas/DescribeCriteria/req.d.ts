export interface DescribeCriteriaRequest {
    /**
     * 查询的资产类型。取值：
     * - **ecs** ：表示查询所有ECS服务器。
     * @example `ecs`
     */
    "MachineTypes"?: string;
    /**
     * 查询资产时输入的模糊匹配值。
     * @example `47.96`
     */
    "Value"?: string;
    /**
     * 设置输入的模糊查询字段是否支持自动匹配。默认**false**，取值：
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    "SupportAutoTag"?: boolean;
}
