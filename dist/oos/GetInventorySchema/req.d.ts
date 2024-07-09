export interface GetInventorySchemaRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 是否仅展示支持聚合的模式。
     * 取值范围：
     * - true（只返回支持聚合的模式）
     * - false（返回所有的模式）
     * @example `false`
     */
    "Aggregator"?: boolean;
    /**
     * 组件名称。取值范围：
     * - ACS:InstanceInformation
     * - ACS:Application
     * - ACS:File
     * - ACS:Network
     * - ACS:WindowsRole
     * - ACS:Service
     * - ACS:WindowsUpdate
     * - ACS:WindowsRegistry
     * @example `ACS:Application`
     */
    "TypeName"?: string;
    /**
     * 分页大小。取值范围：1-100。默认为50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token。
     * @example `gAAAAABfh8MVLQI9AuKGACLgjbsXbWs-Mna47IDM6tr6wK7TZ1`
     */
    "NextToken"?: string;
}
