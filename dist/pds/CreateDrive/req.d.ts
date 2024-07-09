export interface CreateDriveRequest {
    "domain_id": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 空间名称，最长 128 字符
         * @example `我的个人空间`
         */
        drive_name: string;
        /**
         * 归属者
         * @example `3b3d7245c159488da17d081ad6c64687`
         */
        owner: string;
        /**
         * 归属者类型，可选值如下：
         * user：用户
         * group：团队
         * @example `user`
         */
        owner_type: string;
        /**
         * 描述信息，最长 1024 字符
         * @example `vip空间`
         */
        description: string;
        /**
         * 空间类型，当前只支持 normal
         * @example `normal`
         */
        drive_type: string;
        /**
         * 状态，可选值如下：
         * enabled：可用
         * disabled：禁用
         * 默认为 enabled
         * @example `enabled`
         */
        status: string;
        /**
         * 总大小，单位为字节，默认不限大小
         * @example `1024`
         */
        total_size: number;
        /**
         * 是否是默认空间，默认为 false
         * @example `true`
         */
        default: boolean;
    };
}
