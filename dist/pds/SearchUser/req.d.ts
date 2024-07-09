export interface SearchUserRequest {
    "domain_id": string;
    /**
     * 请求body
     */
    "body"?: {
        /**
         * 用户昵称，最长128字符
         * @example `pdsuer`
         */
        nick_name: string;
        /**
         * 昵称-模糊搜索，最长128字符
         * @example `la`
         */
        nick_name_for_fuzzy: string;
        /**
         * 用户名称，最长128字符
         * @example `pds`
         */
        user_name: string;
        /**
         * 手机号
         * @example `13900001111`
         */
        phone: string;
        /**
         * 邮箱地址
         * @example `123@pds.com`
         */
        email: string;
        /**
         * 用户状态
         * - disabled（禁止）
         * - enabled（使能）
         * @example `enabled`
         */
        status: string;
        /**
         * 角色
         * - superadmin（超级管理员）
         * - admin（管理员）
         * - user（用户）
         * @example `user`
         */
        role: string;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * <br>默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * 限定此次返回资源的数量，取值范围为[1,100]，默认返回100
         * @example `100`
         */
        limit: number;
    };
}
