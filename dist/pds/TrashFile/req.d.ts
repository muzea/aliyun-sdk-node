export interface TrashFileRequest {
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
         * @example `4221bf6e6ab43c255edc4463bf3a6f5f5d317406`
         */
        file_id: string;
    };
}
