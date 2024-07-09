export interface CreateCostUnitRequest {
    /**
     * 财务单元列表。
     */
    "UnitEntityList"?: {
        /**
         * 父财务单元ID，-1表示财务单元根。
         * @example `-1`
         */
        ParentUnitId: number;
        /**
         * 新财务单元的属主用户ID。
         * @example `982375623`
         */
        OwnerUid: number;
        /**
         * 财务单元名称。
         * @example `test`
         */
        UnitName: string;
    }[];
}
