export interface ListOfflineStoragesResponse {
    /**
     * Id of the request
     * @example `6839AE7C-A984-48C1-AC17-331BAC6D97BC`
     */
    requestId: string;
    /**
     * 结果列表
     */
    result: {
        /**
         * 表名称
         * @example `item`
         */
        tableName: string;
        /**
         * 元信息
         */
        meta: any;
    }[];
}
