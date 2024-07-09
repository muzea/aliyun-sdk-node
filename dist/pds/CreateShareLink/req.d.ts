export interface CreateShareLinkRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间id
         * @example `1`
         */
        drive_id: string;
        /**
         * 是否分享整个drive中的文件
         * @example `true`
         */
        share_all_files: boolean;
        /**
         * 分享父路径文件id列表。
         * 父路径文件个数范围[1, 100]。
         * 如果`share_all_files=true`，那么此字段无效，否则必须要填写
         * @example `["520b217f13adf4fc24f2191991b1664ce045b393"]`
         */
        file_id_list: string[];
        /**
         * 用户id
         * @example `u123`
         */
        user_id: string;
        /**
         * 提取码。
         * 提取码长度范围[0, 64]字节
         * 不设置或者设置为空表示无提取码，在获取分享令牌的时候也不用设置提取码参数。
         * 要求使用ASCII可见字符。
         * @example `abcF123x`
         */
        share_pwd: string;
        /**
         * 失效时间点。
         * RFC3339格式，比如："2020-06-28T11:33:00.000+08:00"。
         * 当expiration取值""时，表示永久有效
         * @example `2020-06-28T11:33:00.000+08:00`
         */
        expiration: string;
        /**
         * 分享描述。
         * 长度范围[0, 1024]字符
         * @example `百家讲坛合集`
         */
        description: string;
        /**
         * 分享名。
         * 如果未设置，默认使用file\_id\_list中的第一个id对应的文件名。
         * 长度范围[0, 128]字符
         * @example `百家讲坛-1.MP4`
         */
        share_name: string;
        /**
         * 禁止预览分享中的文件
         * @example `false`
         */
        disable_preview: boolean;
        /**
         * 禁止转存分享中的文件
         * @example `false`
         */
        disable_save: boolean;
        /**
         * 禁止下载分享中的文件
         * @example `false`
         */
        disable_download: boolean;
        /**
         * 分享预览次数限制。
         * 次数要求>=0。
         * 次数0表示不限制
         * @example `100`
         */
        preview_limit: number;
        /**
         * 分享转存次数限制。
         * 次数要求>=0。
         * 次数0表示不限制
         * @example `100`
         */
        save_limit: number;
        /**
         * 分享下载次数限制。
         * 次数要求>=0。
         * 次数0表示不限制
         * @example `100`
         */
        download_limit: number;
        /**
         * 允许在分享中的文件夹中创建文件；creatable为true时，需要同时传creatable_file_id_list参数
         * @example `true`
         */
        creatable: boolean;
        /**
         * 允许上传的文件夹file id列表
         */
        creatable_file_id_list: string[];
    };
}
