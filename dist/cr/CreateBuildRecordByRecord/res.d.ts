export interface CreateBuildRecordByRecordResponse {
    /**
     * 接口返回码：200：表示成功。                                 其它：表示错误码。
     * @example `success`
     */
    Code: string;
    /**
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `4CE1F661-75DD-4EBD-A4AD-057B26834ABB
    `
     */
    RequestId: string;
    /**
     * 构建记录ID
     * @example `crbr-ly77w5i3t31f****
    `
     */
    BuildRecordId: string;
}
