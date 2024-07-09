export interface QueryDatasetSwitchInfoResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `FAECEFA8-09BB-58AB-BC58-C8ACEFE4D232`
     */
    RequestId: string;
    /**
     * 数据集行列权限开关详情。
     */
    Result: {
        /**
         * 行级权限开关状态。
         * - 1：开启
         * - 0：关闭
         * @example `1`
         */
        IsOpenRowLevelPermission: number;
        /**
         * 数据集ID。
         * @example `7c7223ae-****-3c744528014b`
         */
        CubeId: string;
        /**
         * 列级字段权限开关状态。取值范围：
         * - 1：开启
         * - 0：关闭
         * @example `1`
         */
        IsOpenColumnLevelPermission: number;
    };
}
