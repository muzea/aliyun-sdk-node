export interface DescribeApplicationResourceSummaryRequest {
    /**
     * 区域统计级别，枚举类型，取值范围：
     * - **National**（默认值）：全国。
     * - **Big**：大区。
     * - **Middle**：省级。
     * - **Small**：城市。
     * - **RegionId**：边缘节点。
     * @example `National`
     */
    "Level"?: string;
    /**
     * 资源类型。
     * @example `BareMetal-Arm`
     */
    "ResourceType"?: string;
}
