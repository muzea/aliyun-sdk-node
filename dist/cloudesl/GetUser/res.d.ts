export interface GetUserResponse {
    /**
     * 请求ID。
     * @example `E69C8998-1787-4999-8C75-D663FF1173CF`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * 请求成功与否标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * 内部错误码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 消息。
     * @example `success`
     */
    Message: string;
    /**
     * 动态消息。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 动态错误码。
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 用户信息。
     */
    User: {
        /**
         * 用户类型，可选值：
         * USER_TYPE_COMPANY_OWNER：商家主账号
         * USER_TYPE_COMPANY_ROOT：高级商家管理员
         * USER_TYPE_COMPANY_ADMIN：商家管理员
         * USER_TYPE_STORE_ADMIN：门店管理员
         * USER_TYPE_STORE_OPERATOR：门店操作员
         * USER_TYPE_GUEST：没有任何权限的访客。
         * @example `USER_TYPE_COMPANY_OWNER`
         */
        UserType: string;
        /**
         * 阿里云子账号UID。
         * @example `1344***`
         */
        UserId: string;
        /**
         * 门店ID列表。
         * @example `[s-dxsxxxxxx,s-dxsyyyyyyy]`
         */
        Stores: string;
        /**
         * 用户姓名。
         * @example `张三`
         */
        UserName: string;
        /**
         * 账号类型；
         * 26842：阿里云
         * @example `26842`
         */
        Bid: string;
        /**
         * 阿里云主账号
         * @example `12143124132`
         */
        OwnerId: string;
        /**
         * 钉钉账号信息
         */
        DingTalkInfos: {
            /**
             * 钉钉商家ID
             * @example `131242`
             */
            DingTalkCompanyId: string;
            /**
             * 钉钉用户ID；
             * @example `34352525`
             */
            DingTalkUserId: string;
        }[];
    };
}
