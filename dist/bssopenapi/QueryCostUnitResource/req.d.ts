export interface QueryCostUnitResourceRequest {
    /**
     * 财务单元的属主用户ID。
     * @example `23453245`
     */
    "OwnerUid": number;
    /**
     * 财务单元的ID。
     * @example `235325`
     */
    "UnitId": number;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页条数。
     * @example `20`
     */
    "PageSize"?: number;
}
