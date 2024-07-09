export interface FileDeleteUserTagsRequest {
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
         * 待删除的标签列表。
         * 数组不能为空，且数量上限为 1000。
         */
        key_list: string[];
    };
}
