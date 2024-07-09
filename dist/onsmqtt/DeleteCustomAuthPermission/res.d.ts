export interface DeleteCustomAuthPermissionResponse {
    /**
     * Id of the request
     * @example `34063BCA-0946-49C1-B824-2ED2C905****`
     */
    RequestId: string;
    /**
     * Code码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：true：请求成功。                                 false：请求失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 请求返回的信息。
     * @example `operation success.`
     */
    Message: string;
}
