export interface GetManagedPrometheusStatusResponse {
    /**
     * 请求ID。
     * @example `F7781D4A-2818-41E7-B7BB-79D809E9****`
     */
    RequestId: string;
    /**
     * 查询状态结果。
     * - Installing：install成功且无Agent注册信息。
     * - Succeed：install成功且Agent注册成功。
     * - Failure：install失败或Agent注册失败。
     * - Unknown： 无install状态。
     * @example `Installing`
     */
    Data: string;
    /**
     * 是否操作成功。
     * - `true`删除成功
     * - `false`删除失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求失败的提示信息。
     * @example `查询成功`
     */
    Message: string;
    /**
     * 接口状态或pop错误码。
     * @example `200`
     */
    Code: number;
}
