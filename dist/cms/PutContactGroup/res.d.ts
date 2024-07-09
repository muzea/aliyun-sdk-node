export interface PutContactGroupResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Illegal parameters.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B4E30DB6-F069-5D0B-A589-2A89F7D62A57`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
