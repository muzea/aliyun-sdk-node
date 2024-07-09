export interface GetUserResponse {
    /**
     * RAM用户信息。
     */
    User: {
        /**
         * 显示名称。
         * @example `alice`
         */
        DisplayName: string;
        /**
         * RAM用户的电子邮箱。
         * > 该参数仅适用于中国站。
         * @example `alice@example.com`
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
         * @example `222748924538****`
         */
        UserId: string;
        /**
         * 备注。
         * @example `这是一位云计算工程师`
         */
        Comments: string;
        /**
         * 上次使用密码登录时间（UTC时间）。
         * @example `2015-01-23T12:33:18Z`
         */
        LastLoginDate: string;
        /**
         * RAM用户的创建时间（UTC时间）。
         * @example `2015-01-23T12:33:18Z`
         */
        CreateDate: string;
        /**
         * RAM用户的名称。
         * @example `alice`
         */
        UserName: string;
    };
    /**
     * 请求ID。
     * @example `2D69A58F-345C-4FDE-88E4-BF5189484043`
     */
    RequestId: string;
}
