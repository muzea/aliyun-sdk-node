export interface UpdateDriveRequest {
    "domain_id": string;
    /**
     * 请求体
     */
    "body"?: {
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 空间名称，最长 128 字符
         * @example `我的个人空间`
         */
        drive_name: string;
        /**
         * 描述，最长 1024 字符
         * @example `vip空间`
         */
        description: string;
        /**
         * 空间状态，可选值如下：
         * enabled：可用
         * disabled：禁用
         * @example `enabled`
         */
        status: string;
        /**
         * 总大小，单位为字节，不限制大小时填 -1
         * @example `10240`
         */
        total_size: number;
        /**
         * 归属者
         * 注意，当前只允许通过 ak 来修改个人 drive 的所有者。
         * @example `user1`
         */
        owner: string;
    };
}
