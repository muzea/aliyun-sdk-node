export interface CreateUserRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 用户id，最长64字符，不能包含字符#
         * @example `pdsuserid1`
         */
        user_id: string;
        /**
         * 用户昵称，最长128字符
         * @example `pdsuer`
         */
        nick_name: string;
        /**
         * 用户状态，默认为enabled
         * - enabled（正常）
         * - disabled（禁止登录）
         * @example `enabled`
         */
        status: string;
        /**
         * 角色，默认为user
         * - superadmin（超级管理员）
         * - admin（管理员）
         * - user（普通用户）
         * 如果当前domain支持subdomain。还可以支持 "subdomain\_super_admin", "subdomain\_admin”。
         * @example `user`
         */
        role: string;
        /**
         * 头像地址
         * http形式时，以http:// 或https:// 作为前缀，参数长度最长4KB
         * data形式时，以data://作为前缀，base64编码，参数长度最长300KB
         * @example `http://a.b.c/pds.jpg`
         */
        avatar: string;
        /**
         * 电话
         * @example `13900001111`
         */
        phone: string;
        /**
         * 邮箱地址
         * @example `123@pds.com`
         */
        email: string;
        /**
         * 用户自定义数据，最长1024字符
         * @example `md`
         */
        user_data: any;
        /**
         * 群组信息
         */
        group_info_list: {
            /**
             * 群组id
             * @example `g123`
             */
            group_id: string;
        }[];
        /**
         * 用户名，最长128字符
         * @example `pdsusername`
         */
        user_name: string;
        /**
         * 用户描述，最长1024字符
         * @example `VIP用户`
         */
        description: string;
    };
}
