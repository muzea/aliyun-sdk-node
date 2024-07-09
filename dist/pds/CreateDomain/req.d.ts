export interface CreateDomainRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 父 domain id
         * 如果需要创建子 domain，可以设置该值，一般情况下不需要创建。
         * 如果需要针对 PDS 做二次运营，可以联系 PDS 官网客服进行咨询。
         * @example `bj1`
         */
        parent_domain_id: string;
        /**
         * domain 名称
         * @example `你好企业网盘`
         */
        domain_name: string;
        /**
         * domain 描述
         * @example `你好企业网盘开发环境`
         */
        description: string;
        /**
         * 是否开通默认网盘。为true则所有用户在第一次登录后都默认分配一个网盘。默认false
         * @example `true`
         */
        init_drive_enable: boolean;
        /**
         * init\_drive\_enable 为true时必选。 创建用户时，默认网盘的大小，单位：Bytes。
         * 默认为 0，此时创建的 drive 大小为0，不可以上传文件，如果需要初始化 drive， 请设置该值。
         * -1则表示不限大小。
         * @example `1073741824`
         */
        init_drive_size: number;
        /**
         * 用户数配额，表示该 domain 允许创建的用户数量，为0表示不限制
         * @example `50`
         */
        user_count_quota: number;
        /**
         * 容量配额，表示 domain 下所有 drive 的总quota 大小，0 表示不限制
         * @example `1099511627776`
         */
        size_quota: number;
    };
}
