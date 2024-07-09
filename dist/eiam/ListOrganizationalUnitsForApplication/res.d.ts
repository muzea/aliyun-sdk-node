export interface ListOrganizationalUnitsForApplicationResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 列表总条数目。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 组织ID列表。
     */
    OrganizationalUnits: {
        /**
         * 组织ID。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        OrganizationalUnitId: string;
    }[];
}
