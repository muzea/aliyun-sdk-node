export interface ListDataLevelPermissionWhiteListResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D8749D65-E80A-433C-AF1B-CE9C180FF3B4`
     */
    RequestId: string;
    /**
     * 指定行级权限类型的白名单列表。
     */
    Result: {
        /**
         * 数据集ID。
         * @example `7c7223ae-****-3c744528014b`
         */
        CubeId: string;
        /**
         * 数据集行列权限类型。取值范围：
         * - ROW_LEVEL：行级权限
         * - COLUMN_LEVEL：列级权限
         * @example `ROW_LEVEL`
         */
        RuleType: string;
        /**
         * 白名单信息。
         */
        UsersModel: {
            UserGroups: string[];
            Users: string[];
        };
    };
}
