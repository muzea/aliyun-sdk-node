export interface RestoreFileRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间ID
         * @example `1`
         */
        drive_id: string;
        /**
         * 文件或文件夹ID
         * @example `4221bf6e6ab43a255edc4463bffa6f5f5d317401`
         */
        file_id: string;
    };
}
