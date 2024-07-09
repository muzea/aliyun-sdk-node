export interface DeleteRevisionRequest {
    /**
     * A short description of struct
     */
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
         * 版本 id
         * @example `40CB7794C929`
         */
        revision_id: string;
    };
}
