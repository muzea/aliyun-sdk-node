export interface DeleteUserResponse {
    /**
     * 返回执行结果。取值：
     *  - true：删除成功。
     *  - false：删除失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
