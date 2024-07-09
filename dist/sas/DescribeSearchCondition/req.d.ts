export interface DescribeSearchConditionRequest {
    /**
     * 要查询的访问源的IP地址。
     * @example `117.220.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     *
     * 要查询的资产类型。取值：
     * - **ecs**：表示查询所有ECS服务器的筛选条件。
     * - **cloud_product**：表示查询所有其他云产品的筛选条件。
     * @example `ecs`
     */
    "Type"?: string;
}
