export interface QueryServicerByDepartmentAndMixNameRequest {
    /**
     *
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    "DepartmentIdList"?: number[];
    "KeyWord"?: string;
    /**
     *
     * @example `1`
     */
    "CurrentPageNum"?: number;
    /**
     *
     * @example `10`
     */
    "PageSize"?: number;
}
