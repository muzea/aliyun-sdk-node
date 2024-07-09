export interface UpdateRoleResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `edit successfully`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4823-bhjf-23u4-****`
     */
    RequestId: string;
}
