export interface CompleteFileRequest {
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
         * 上传id
         * @example `C9DCFE5A82644AC7A02DB74C30C934A6`
         */
        upload_id: string;
        /**
         * 文件id
         * @example `9520943DC264`
         */
        file_id: string;
    };
}
