export interface UpdateUserRequest {
    /**
     * 用户信息
     */
    "User"?: {
        /**
         * 是否启用了EventBridge
         * @example `true`
         */
        EnableEventbridge: boolean;
    };
}
