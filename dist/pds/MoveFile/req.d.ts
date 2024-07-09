export interface MoveFileRequest {
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
         * 目的父文件夹 id，当移入根目录时，填 root
         * @example `6520943DC261`
         */
        to_parent_file_id: string;
        /**
         * 同名文件处理模式，可选值如下：
         * ignore：允许同名文件；
         * auto\_rename：当发现同名文件是，云端自动重命名，默认为追加当前时间点，如 xxx\_20060102\_150405；
         * refuse：当云端存在同名文件时，拒绝创建新文件，返回客户端已存在同名文件的详细信息。
         * 默认为 ignore
         * @example `ignore`
         */
        check_name_mode: string;
    };
}
