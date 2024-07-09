export interface ListInstanceCatalogRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要查询的实例所在地域的ID。取值：
     * - **cn-hangzhou**：中心
     * - **ap-southeast-1**：新加坡
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 检查标准所属类型列表。
     */
    "Types"?: string[];
    /**
     * 标准ID列表。
     */
    "StandardIds"?: number[];
    /**
     * 条例ID列表。
     */
    "RequirementIds"?: number[];
}
