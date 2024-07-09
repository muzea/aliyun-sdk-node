export interface DeleteFileRequest {
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
         * 文件或文件夹id
         * @example `9520943DC264`
         */
        file_id: string;
    };
}
