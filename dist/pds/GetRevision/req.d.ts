export interface GetRevisionRequest {
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
         * 过期时间，单位为秒，最短 10 秒，最长 86400 秒
         * 默认15分钟。
         * @example `900`
         */
        url_expire_sec: number;
        /**
         * 筛选返回字段
         * 默认为空。当填 * 时，返回所有字段，会比为空时多返回创建者名称
         * @example `*`
         */
        fields: string;
    };
}
