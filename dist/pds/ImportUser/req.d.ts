export interface ImportUserRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 认证类型
         * - mobile：手机号
         * - email：邮箱
         * - ding：钉钉
         * - ram：阿里云RAM子账号
         * - wechat：企业微信
         * - ldap：LDAP账号
         * - custom：自定义账号
         * @example `mobile`
         */
        authentication_type: string;
        /**
         * 唯一身份标识
         * @example `130****`
         */
        identity: string;
        /**
         * 认证方式的显示名称
         * @example `10000`
         */
        authentication_display_name: string;
        /**
         * 额外信息
         * authentication\_type为mobile时，此字段为国家编号，不填默认86。
         * @example `1`
         */
        extra: string;
        /**
         * 昵称
         * @example `pdsuer`
         */
        nick_name: string;
        /**
         * 自动创建空间
         * @example `false`
         */
        auto_create_drive: boolean;
        /**
         * 空间大小，不能小于-1，-1表示无限制
         * @example `10240`
         */
        drive_total_size: number;
        /**
         * 加入到的分组id
         * @example `g12`
         */
        parent_group_id: string;
    };
}
