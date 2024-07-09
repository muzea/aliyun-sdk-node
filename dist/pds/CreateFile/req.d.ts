export interface CreateFileRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 文件名称，按照 utf8 编码最长 1024 字节，不能以 / 结尾
         * @example `a.txt`
         */
        name: string;
        /**
         * 文件类型，可选值如下：
         * file：文件
         * folder：文件夹
         * @example `file`
         */
        type: string;
        /**
         * 父目录id，上传到根目录时填写 root
         * @example `fileid1`
         */
        parent_file_id: string;
        /**
         * 空间 id，除通过分享链接上传之外，必填
         * @example `1`
         */
        drive_id: string;
        /**
         * 分享 id，当通过分享链接上传时必填
         * @example `7JQX1FswpQ8`
         */
        share_id: string;
        /**
         * 文件大小，单位为 byte。
         * @example `1024`
         */
        size: number;
        /**
         * 文件内容类型，默认值 application/oct-stream<props="china">，常见的 content_type 可以参考 OSS [《如何设置Content-Type（MIME）？》](https://help.aliyun.com/document_detail/39522.htm?spm=a2c4g.11186623.0.0.5a0b7dbb1TPnWF#concept-5041)。</props>
         * @example `application/json`
         */
        content_type: string;
        /**
         * 分片信息列表，最多 10000 个分片，当不填时，默认返回 1 个分片
         */
        part_info_list: {
            /**
             * 分片序列号，从 1 开始
             * @example `1`
             */
            part_number: number;
            /**
             * 该分片前所有数据的SHA1上下文，该字段只在多分片并发上传的模式下有效
             */
            parallel_sha1_ctx: {
                /**
                 * 该分片前所有数据的SHA1上下文的第1-5个32位变量，该字段只在多分片并发上传的模式下有效
                 */
                h: number[];
                /**
                 * 到上一个数据块为止的总长度，字节，需要为64的倍数，该字段只在多分片并发上传的模式下有效
                 * @example `10240`
                 */
                part_offset: number;
            };
            /**
             * 分片的 MD5, 需要在上传分片时校验分片的MD5时填写。
             * @example `ASKJDJSKDJJSJDJS`
             */
            content_md5: string;
        }[];
        /**
         * 用户自定义 tag，最多 1000 个 tag
         */
        user_tags: any[];
        /**
         * 是否隐藏，默认不隐藏
         * @example `false`
         */
        hidden: boolean;
        /**
         * 文件描述信息，最长 1024 字符，默认为空
         * @example `团队文件`
         */
        description: string;
        /**
         * 文件内容 hash 值，需要根据 content_hash_name 指定的算法计算
         * @example `7C4A8D09CA3762AF61E59520943DC26494F8941B`
         */
        content_hash: string;
        /**
         * 文件内容hash算法名，当前只支持 sha1
         * @example `sha1`
         */
        content_hash_name: string;
        /**
         * 使用预秒传功能时填写，为文件前1KB sha1值，当远端没有匹配上时，客户端无需再计算文件完整 sha1 去尝试秒传。
         * @example `7C4A8D09CA3762AF61E59520943DC26494F89411`
         */
        pre_hash: string;
        /**
         * 同名文件处理模式，可选值如下：
         * ignore：允许同名文件；
         * auto_rename：当发现同名文件是，云端自动重命名，默认为追加当前时间点，如 xxx _20060102_150405；
         * refuse：当云端存在同名文件时，拒绝创建新文件，返回客户端已存在同名文件的详细信息。
         * 默认为 ignore
         * @example `ignore`
         */
        check_name_mode: string;
        /**
         * 文件id，覆盖写时必填
         * @example `9520943DC264`
         */
        file_id: string;
        /**
         * 文件本地创建时间，默认为空，格式为：yyyy-MM-ddTHH:mm:ssZ，采用 UTC +0 时区
         * @example `2019-08-20T06:51:27.292Z`
         */
        local_created_at: string;
        /**
         * 文件本地修改时间，默认为空，格式为：yyyy-MM-ddTHH:mm:ssZ，采用 UTC +0 时区
         * @example `2019-08-20T06:51:27.292Z`
         */
        local_modified_at: string;
        /**
         * 客户端指定的图片信息
         */
        image_media_metadata: any;
        /**
         * 客户端指定的视频信息
         */
        video_media_metadata: any;
        /**
         * 是否开启并行上传分片功能
         * @example `true`
         */
        parallel_upload: boolean;
    };
}
