export interface CsiGetFileInfoRequest {
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
         * 文件id
         * @example `9520943DC264`
         */
        file_id: string;
        /**
         * 可选填下载链接过期时间，单位为秒，取值范围为：[10,14400] 秒。
         * 填写此字段时提供下载链接，默认不提供下载链接。
         * @example `100`
         */
        url_expire_sec: number;
    };
}
