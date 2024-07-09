export interface AddCheckInstanceResultWhiteListRequest {
    /**
     * 检查项所属检查组ID。
     * @example `cQFq20UzZ49K6gRSJD1301****`
     */
    "CheckGroupId"?: string;
    /**
     * 检查项ID。
     * @example `132`
     */
    "CheckId"?: number;
    /**
     * 实例ID集合。
     */
    "InstanceIds"?: string[];
}
