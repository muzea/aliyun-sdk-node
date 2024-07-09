export interface DoMetaQueryRequest {
    /**
     * Bucket名称。
     * @example `examplebucket
    `
     */
    "bucket": string;
    /**
     * 保存查询条件的请求体。
     */
    "body"?: {
        /**
         * 保存查询条件的容器。
         */
        MetaQuery: any;
    };
}
