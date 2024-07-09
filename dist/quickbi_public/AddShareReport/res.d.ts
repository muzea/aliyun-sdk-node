export interface AddShareReportResponse {
    /**
     * 请求ID。
     * @example `05739b8e-3de0-4204-9669-7f04f02522b9`
     */
    RequestId: string;
    /**
     * 返回接口执行结果。取值范围：
     * - true：执行成功
     * - false：执行失败
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
