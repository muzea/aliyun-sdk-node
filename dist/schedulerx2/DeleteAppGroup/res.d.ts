export interface DeleteAppGroupResponse {
    /**
     * Id of the request
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108`
     */
    RequestId: string;
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `app is not existed, groupId=xxxx, namesapce=xxxx`
     */
    Message: string;
    /**
     * API调用是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
