export interface DeleteAlertContactResponse {
    /**
     * 删除联系人是否成功。
     * - `true`：删除成功
     * - `false`：删除失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID。
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
     */
    RequestId: string;
}
