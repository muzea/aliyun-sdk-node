export interface ListBindingsResponse {
    /**
     * 请求ID。
     * @example `EFDFD356-C928-4A36-951A-6EB5A592****`
     */
    RequestId: string;
    /**
     * - 当绑定关系总数大于设置的MaxResults时，用于翻页的token。
     * - 下一次列出绑定关系信息时以此值为NextToken，将未返回的结果返回。
     * - 当绑定关系未全部返回时，此参数才有值。
     * @example `immtest:dataset001:examplebucket01`
     */
    NextToken: string;
    /**
     * 数据集和OSS Bucket绑定关系信息的列表。
     */
    Bindings: any[];
}
