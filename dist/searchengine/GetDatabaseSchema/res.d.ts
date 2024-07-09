export interface GetDatabaseSchemaResponse {
    /**
     * id of request
     * @example `022F36C7-9FB4-5D67-BEBC-3D14B0984463`
     */
    requestId: string;
    /**
     * List
     */
    result: {
        /**
         * 字段名称。
         * @example `id`
         */
        fieldName: string;
        /**
         * 字段类型。
         * @example `STRING`
         */
        fieldType: string;
        /**
         * 索引名称
         * @example `test_tusou_v2`
         */
        indexName: string;
        /**
         * 索引类型。
         * @example `NUMBER`
         */
        indexType: string;
        /**
         * 字段类型详情
         * @example `FT_UINT64`
         */
        fieldTypeDetail: any;
    }[];
}
