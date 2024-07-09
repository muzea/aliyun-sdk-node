export interface UpdateShareLinkRequest {
    "domain_id": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 分享id
         * @example `7JQX1FswpQ8`
         */
        share_id: string;
        /**
         * 提取码。
         * 提取码长度范围[0, 64]。
         * 长度0表示提取码是""
         * @example `abcF123x`
         */
        share_pwd: string;
        /**
         * 失效时间点。
         * RFC3339格式，比如："2020-06-28T11:33:00.000+08:00"。
         * ""表示永久有效
         * @example `2020-06-28T11:33:00.000+08:00`
         */
        expiration: string;
        /**
         * 描述。
         * 长度范围[0, 1024]
         * @example `百家讲坛全集`
         */
        description: string;
        /**
         * 分享名。
         * 默认使用第一个文件名。
         * 长度范围[0, 128]
         * @example `百家讲坛-1.mp4`
         */
        share_name: string;
        /**
         * 分享状态。
         * 枚举值如下：
         * - disabled（已取消）
         * - enabled（有效）
         * @example `enabled`
         */
        status: string;
        /**
         * 禁止预览
         * @example `false`
         */
        disable_preview: boolean;
        /**
         * 禁止转存
         * @example `false`
         */
        disable_save: boolean;
        /**
         * 禁止下载
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
    };
}
