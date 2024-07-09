export interface GetFileResponse {
    /**
     * id of request
     * @example `2AE63638-5420-56DC-BF59-37D8174039A0`
     */
    requestId: string;
    /**
     * 索引信息
     */
    result: {
        /**
         * 文件名称
         * @example `testFile`
         */
        name: string;
        /**
         * 全路径名称
         * @example `/schema.json`
         */
        fullPathName: string;
        /**
         * 数据源
         * @example `ha-cn-pl32rf0****_test_api`
         */
        dataSource: string;
        /**
         * 分片数
         * @example `2`
         */
        partition: number;
        /**
         * 是否为目录
         * @example `true`
         */
        isDir: boolean;
        /**
         * 内容
         * @example `{"summarys":{"parameter":{"file_compressor":"zstd"},"summary_fields":["id"]},"file_compress":[{"name":"file_compressor","type":"zstd"},{"name":"no_compressor","type":""}],"indexs":[{"index_fields":"name","index_name":"ids","index_type":"STRING"},{"has_primary_key_attribute":true,"index_fields":"id","is_primary_key_sorted":false,"index_name":"id","index_type":"PRIMARYKEY64"}],"attributes":[{"file_compress":"no_compressor","field_name":"id"}],"fields":[{"user_defined_param":{},"compress_type":"uniq","field_type":"STRING","field_name":"id"},{"compress_type":"uniq","field_type":"STRING","field_name":"name"}],"table_name":"api"}`
         */
        content: string;
    };
}
