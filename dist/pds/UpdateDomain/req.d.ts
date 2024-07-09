export interface UpdateDomainRequest {
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * domain id
         * @example `bj1`
         */
        domain_id: string;
        /**
         * domain 名称
         * @example `你好企业网盘`
         */
        domain_name: string;
        /**
         * domain 描述
         * @example `你好企业网盘调试环境`
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
         * domain 总用户数限制
         * @example `50`
         */
        user_count_quota: number;
        /**
         * 容量配额，表示 domain 下所有 drive 的总quota 大小，0 表示不限制
         * @example `1099511627776`
         */
        size_quota: number;
        /**
         * App 访问策略
         */
        published_app_access_strategy: any;
    };
}
