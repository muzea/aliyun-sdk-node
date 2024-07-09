export interface GetClusterDataInformationResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 是否可连通。
         * @example `true`
         */
        connectable: boolean;
        /**
         * 集群的元数据信息。
         */
        metaInfo: {
            /**
             * 集群的Mapping配置。
             * @example `{\"_doc\":{\"properties\":{\"user\":{\"properties\":{\"last\":{\"type\":\"text\",...}}}}}}`
             */
            mapping: string;
            /**
             * 集群的Settings配置。
             * @example `{\n  \"index\": {\n    \"replication\": {\n}.....}}`
             */
            settings: string;
            typeName: string[];
            fields: string[];
            indices: string[];
        };
    };
}
