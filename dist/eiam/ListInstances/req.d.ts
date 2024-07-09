export interface ListInstancesRequest {
    /**
     * 列表页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 列表大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 实例ID列表。
     */
    "InstanceIds"?: string[];
    /**
     * 实例状态，取值可选范围：
     * - creating：创建中。
     * - running：运行中。
     * @example `running`
     */
    "Status"?: string;
}
