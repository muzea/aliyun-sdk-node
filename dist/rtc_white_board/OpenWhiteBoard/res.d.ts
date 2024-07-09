export interface OpenWhiteBoardResponse {
    /**
     * 请求ID。
     * @example `CE47143D-9700-4756-856A-BB22FEBE4DAE`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    ResponseSuccess: boolean;
    /**
     * 错误码。
     * @example `null`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `null`
     */
    ErrorMsg: string;
    /**
     * 返回的结果信息。
     */
    Result: {
        /**
         * 白板连接信息。
         */
        DocumentAccessInfo: {
            /**
             * 连接签名。
             * @example `qbFPTqipwQZqkGitAoAGbNHuHREm****`
             */
            AccessToken: string;
            /**
             * 白板长连接地址。
             * @example `collab-cn-shanghai.****.com`
             */
            CollabHost: string;
            /**
             * 权限码。取值：
             * - **0**：无权限。
             * - **1**：只读。
             * - **2**：读写。
             * @example `2`
             */
            Permission: number;
            /**
             * 用户信息。
             */
            UserInfo: {
                /**
                 * 用户头像的URL。
                 * @example `http://www.avatarset/****.jpg`
                 */
                AvatarUrl: string;
                /**
                 * 用户昵称。
                 * @example `Mary`
                 */
                Nick: string;
                /**
                 * 用户的拼音昵称。
                 * @example `Pinyin_Mary`
                 */
                NickPinyin: string;
                /**
                 * 打开白板的用户ID。
                 * @example `123456`
                 */
                UserId: string;
            };
        };
    };
}
