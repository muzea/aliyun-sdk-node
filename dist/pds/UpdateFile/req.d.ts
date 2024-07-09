export interface UpdateFileRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 文件 id
         * @example `9520943DC264`
         */
        file_id: string;
        /**
         * 文件名称，按照 utf8 编码规则最长 1024 字节
         * @example `a.jpg`
         */
        name: string;
        /**
         * 文件描述信息，最长 1024 字符
         * @example `VIP用户`
         */
        description: string;
        /**
         * 标签列表，最多 100 个标签
         */
        labels: string[];
        /**
         * 同名文件处理模式，可选值如下：
         * ignore：允许同名文件；
         * auto_rename：当发现同名文件时，云端自动重命名，默认为追加当前时间点，如 xxx\_20060102\_150405；
         * refuse：当云端存在同名文件时，拒绝创建新文件，返回客户端已存在同名文件的详细信息。
         * 默认为 ignore
         * @example `ignore`
         */
        check_name_mode: string;
        /**
         * 文件本地修改时间，格式为：yyyy-MM-ddTHH:mm:ssZ，采用 UTC +0 时区
         * @example `2019-08-20T06:51:27.292Z`
         */
        local_modified_at: string;
        /**
         * 是否隐藏
         * @example `true`
         */
        hidden: boolean;
        /**
         * 是否收藏
         * @example `true`
         */
        starred: boolean;
    };
}
