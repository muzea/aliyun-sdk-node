export interface ListDiagnosisItemsResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 诊断项标识。
         * @example `ClusterBulkRejectDiagnostic`
         */
        key: string;
        /**
         * 诊断项名称
         * @example `索引写入BulkReject诊断`
         */
        name: string;
        /**
         * 诊断项说明
         * @example `诊断集群写数据是否有堆积当集群的数据写入存在堆积时，会造成BulkReject异常，可能会导致数据丢失，且会造成系统资源消耗严重`
         */
        description: string;
    }[];
}
