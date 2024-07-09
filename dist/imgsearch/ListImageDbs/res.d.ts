export interface ListImageDbsResponse {
    /**
     * 请求ID。
     * @example `4E010B89-B370-458A-A586-B9A9F3BC3058`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 数据库列表。
         */
        DbList: {
            /**
             * 数据库名称。
             * @example `default`
             */
            Name: string;
        }[];
    };
}
