export interface ListContactFlowsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 按IVR流程类型过滤，非必填，默认为空，为空表示不过滤。
     * @example `MAIN_FLOW`
     */
    "Type"?: string;
    /**
     * 排序方向。取值范围：
     * - **ASC**：升序
     * - **DESC**（默认值）：降序
     * @example `DESC`
     */
    "SortOrder"?: string;
    /**
     * 排序字段。
     * @example `updatedTime`
     */
    "OrderByField"?: string;
}
