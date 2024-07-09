export interface UpdateUserRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 用户id，最长64字符，不能包含字符#
         * @example `c9b7a5aa04d14ae3867fdc886fa01da4`
         */
        user_id: string;
        /**
         * 用户昵称，最长128字符
         * @example `pdsuer`
         */
        nick_name: string;
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
         * - user（普通用户）
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
         * 描述信息，最长1024字符
         * @example `vip用户`
         */
        description: string;
        /**
         * 手机号
         * @example `13900001111`
         */
        phone: string;
        /**
         * 邮箱
         * @example `a@aliyunpds.com`
         */
        email: string;
        /**
         * 用户自定义数据，最长1024字符
         */
        user_data: any;
        /**
         * 群组信息列表
         */
        group_info_list: {
            /**
             * 群组id
             * @example `g123`
             */
            group_id: string;
        }[];
    };
}
