export interface CreateUserResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 坐席展示名。
         * @example `坐席小王`
         */
        DisplayName: string;
        /**
         * 坐席分机号。
         * @example `8032****`
         */
        Extension: string;
        /**
         * 邮箱。
         * @example `username@example.com`
         */
        Email: string;
        /**
         * 坐席登录名。
         * @example `agent`
         */
        LoginName: string;
        /**
         * 工作模式。
         * @example `ON_SITE`
         */
        WorkMode: string;
        /**
         * 坐席的个人电话号码。
         * @example `1382114****`
         */
        Mobile: string;
        /**
         * 坐席ID。
         * @example `agent@ccc-test`
         */
        UserId: string;
        /**
         * 坐席头像地址。
         * @example `http://abc.com/sam.jpg`
         */
        AvatarUrl: string;
        /**
         * 座席昵称。
         * @example `老王。`
         */
        Nickname: string;
    };
    /**
     * 响应参数。
     */
    Params: string[];
}
