export interface QueryCostUnitRequest {
    /**
     * 财务单元的属主用户。
     * @example `28394563429587`
     */
    "OwnerUid": number;
    /**
     * 父财务单元ID，-1表示财务单元根。
     * @example `-1`
     */
    "ParentUnitId": number;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页条数，最大不超过300。
     * @example `20`
     */
    "PageSize"?: number;
}
