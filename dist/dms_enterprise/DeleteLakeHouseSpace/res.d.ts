export interface DeleteLakeHouseSpaceResponse {
    /**
     * 请求ID。
     * @example `E76DD2E7-EBAC-5724-B163-19AAC233F8F2`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `NoPermission`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `You are not authorized to perform this operation.`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
