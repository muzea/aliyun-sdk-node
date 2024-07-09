export interface UpdateRevisionRequest {
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
        /**
         * 是否永久保留
         * 默认不传递该参数，表示不修改版本的永久保留属性。
         * @example `true`
         */
        keep_forever: boolean;
        /**
         * 版本描述信息，最长1024字符
         * 默认不传递该参数，表示不修改版本的版本描述信息。
         * @example `aaa`
         */
        revision_description: string;
    };
}
