export interface DeleteCostUnitRequest {
    /**
     * 财务单元的属主用户ID。
     * @example `2135342`
     */
    "OwnerUid": number;
    /**
     * 财务单元ID，-1表示财务单元根。
     * @example `376348`
     */
    "UnitId": number;
}
