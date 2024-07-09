export interface ListFaceDbsResponse {
    /**
     * 请求ID。
     * @example `2B93C43A-F824-40C8-AF79-844342B0F43A`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
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
