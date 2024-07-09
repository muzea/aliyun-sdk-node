export interface ListDataLevelPermissionWhiteListRequest {
    /**
     * 数据集ID。
     * @example `3d5db23c-e4f2-49dd-a883-92285b48e14a`
     */
    "CubeId": string;
    /**
     * 白名单所属的行列权限类型：
     * - ROW_LEVEL：行级权限
     * - COLUMN_LEVEL：列级权限
     * @example `ROW_LEVEL`
     */
    "RuleType": string;
}
