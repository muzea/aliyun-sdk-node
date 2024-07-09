export interface ChangeResourceManagerResourceGroupResponse {
    /**
     * 变更资源组是否成功。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求的ID。
     * @example `1AFAE64E-D1BE-432B-A9****`
     */
    RequestId: string;
    /**
     * 请求返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
