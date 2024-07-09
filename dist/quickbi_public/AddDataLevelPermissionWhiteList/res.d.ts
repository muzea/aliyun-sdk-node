export interface AddDataLevelPermissionWhiteListResponse {
    /**
     * 请求ID。
     * @example `D8749D65-E80A-433C-AF1B-CE9C180FF3B4`
     */
    RequestId: string;
    /**
     * 接口执行结果。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
