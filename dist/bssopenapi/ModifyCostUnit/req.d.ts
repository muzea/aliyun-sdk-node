export interface ModifyCostUnitRequest {
    /**
     * 财务单元列表。
     */
    "UnitEntityList"?: {
        /**
         * 财务单元的ID。
         * @example `2524352`
         */
        UnitId: number;
        /**
         * 财务单元的新名字。
         * @example `newTest`
         */
        NewUnitName: string;
        /**
         * 财务单元的属主用户ID。
         * @example `1321312312`
         */
        OwnerUid: number;
    }[];
}
