export interface UpdateJobResponse {
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息，仅出错时返回错误信息。
     * @example `job type is java className can not be blank`
     */
    Message: string;
    /**
     * 请求唯一ID。
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
}
