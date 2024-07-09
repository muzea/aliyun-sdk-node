export interface ListDetectionsRequest {
    /**
     * 开始日期
     * @example `2020-10-10`
     */
    "CreateDateFrom"?: string;
    /**
     * 结束日期
     * @example `2020-10-11`
     */
    "CreateDateTo"?: string;
    /**
     * 部门 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "DepartmentId"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 类型：remote（远程双录），local（本地双录）
     * @example `local`
     */
    "RecordingType"?: string;
    /**
     * 规则 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "RuleId"?: string;
}
