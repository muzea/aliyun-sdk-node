export interface SetDataLevelPermissionExtraConfigRequest {
    /**
     * 数据集ID。
     * @example `7c7223ae-******-3c744528014b`
     */
    "CubeId": string;
    /**
     * 数据集行列权限类型。取值范围：
     * - ROW_LEVEL：行级权限
     * - COLUMN_LEVEL：列级权限
     * @example `ROW_LEVEL`
     */
    "RuleType": string;
    /**
     * 未命中规则时的策略：
     * - NONE：无权限
     * - ALL：拥有所有权限
     * @example `NONE`
     */
    "MissHitPolicy": string;
}
