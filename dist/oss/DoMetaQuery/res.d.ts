export interface DoMetaQueryResponse {
    /**
     * 保存查询结果的容器。
     */
    MetaQuery: {
        /**
         * 当Object总数大于设置的MaxResults时，用于翻页的token。
         * 从NextToken开始按字典序返回Object信息列表。
         * 第一次调用此接口时，设置此字段为空。
         * @example `MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpw****`
         */
        NextToken: string;
        /**
         * 保存查询结果Object信息的容器。
         */
        Files: {
            /**
             * 保存Object信息的列表。
             */
            File: any[];
        };
    };
}
