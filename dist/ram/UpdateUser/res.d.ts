export interface UpdateUserResponse {
    /**
     * RAM用户信息。
     */
    User: {
        /**
         * RAM用户的显示名称。
         * @example `xiaoq****`
         */
        DisplayName: string;
        /**
         * RAM用户的电子邮箱。
         * > 该参数仅适用于中国站。
         * @example `xiaoq****@example.com`
         */
        Email: string;
        /**
         * RAM用户的更新时间（UTC时间）。
         * @example `2015-02-11T03:15:21Z`
         */
        UpdateDate: string;
        /**
         * RAM用户的手机号码。
         * > 该参数仅适用于中国站。
         * @example `86-1860000****`
         */
        MobilePhone: string;
        /**
         * RAM用户的唯一标识。
         * @example `122748924538****`
         */
        UserId: string;
        /**
         * 备注。
         * @example `This is a cloud computing engineer.`
         */
        Comments: string;
        /**
         * RAM用户的创建时间（UTC时间）。
         * @example `2015-01-23T12:33:18Z`
         */
        CreateDate: string;
        /**
         * RAM用户的名称。
         * @example `xiaoq****`
         */
        UserName: string;
    };
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
