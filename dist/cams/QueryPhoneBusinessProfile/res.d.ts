export interface QueryPhoneBusinessProfileResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 错误提示信息。
     * @example `None`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A94866411B2O`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 行业。
         * @example `零售`
         */
        Vertical: string;
        /**
         * 描述。
         * @example `描述`
         */
        Description: string;
        /**
         * 邮箱。
         * @example `example@aliyun.com`
         */
        Email: string;
        /**
         * 地址。
         * @example `长沙`
         */
        Address: string;
        /**
         * 头像。
         * @example `https://example.img`
         */
        ProfilePictureUrl: string;
        /**
         * 网站。
         */
        Websites: string[];
        /**
         * 关于。
         * @example `business profile`
         */
        About: string;
    };
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~196974~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
