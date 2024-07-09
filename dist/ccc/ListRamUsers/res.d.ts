export interface ListRamUsersResponse {
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
     * @example `24753D71-C91D-1A38-A8AD-372BF12453F6`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-1000。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * RAM用户列表。
         */
        List: {
            /**
             * RAM账户姓名。
             * @example `测试账号`
             */
            DisplayName: string;
            /**
             * 邮箱。
             * @example `username@example.com`
             */
            Email: string;
            /**
             * RAM用户名。
             * @example `agent`
             */
            LoginName: string;
            /**
             * RAM账户预留的个人电话号码。
             * @example `1382114****`
             */
            Mobile: string;
            /**
             * RAM账户所属的阿里云主账号UID。
             * @example `15772400000****`
             */
            AliyunUid: number;
            /**
             * RAM账号是否为主账号。
             * @example `false`
             */
            Primary: boolean;
            /**
             * RAM用户的UID。
             * @example `28036411123456****`
             */
            RamId: string;
        }[];
    };
    Params: string[];
}
