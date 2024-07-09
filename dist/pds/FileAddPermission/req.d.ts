export interface FileAddPermissionRequest {
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
         * 文件夹id， 当授权整个团队空间时，此字段填root。 个人空间共享不支持填root
         * @example `4221bf6e6ab43c255edc4463bf3a6f5f5d317406`
         */
        file_id: string;
        /**
         * 被授权的成员列表
         */
        member_list: any[];
    };
}
