export interface FilePutUserTagsRequest {
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
         * 待添加的标签列表。
         * 数组不能为空，且数量上限为 1000。
         * 数组中不能存在同名标签。
         */
        user_tags: {
            /**
             * 标签名。
             * 不能为空，且不能含有 # 字符。
             * @example `tag`
             */
            key: string;
            /**
             * 标签值。
             * 不能含有 # 字符。
             * @example `value`
             */
            value: string;
        }[];
    };
}
