export interface GetCheckSummaryRequest {
    /**
     * 请求和接收消息的语言类型。
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 资源目录账号ID。
     * @example `000`
     */
    "ResourceDirectoryAccountId"?: string;
    /**
     * 云厂商列表。
     */
    "Vendors"?: string[];
    /**
     * 是否返回检查项统计信息，包括：系统已发布检查项数、用户当前已有检查项数
     */
    "IsItemStatistic"?: boolean;
}
