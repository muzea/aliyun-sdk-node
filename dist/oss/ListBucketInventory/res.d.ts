export interface ListBucketInventoryResponse {
    /**
     * 存放清单配置参数的容器。
     */
    ListInventoryConfigurationsResult: {
        /**
         * 存放清单配置参数的容器。
         */
        InventoryConfiguration: any[];
        /**
         * 是否列举全部的清单任务。
         * 有效值：true或false
         * 如果值为false，则表明存储空间中的所有清单任务已全部列出。
         * 如果值为true，表示还未完整列出存储空间中的所有清单任务，您可以将NextContinuationToken字段的值作为下一次list请求的continuation-token参数，以获取下一页的清单配置列表。
         * @example `true`
         */
        IsTruncated: boolean;
        /**
         * 当响应中的IsTruncated为true且NextContinuationToken非空时，使用该字段作为下一次list请求的continuation-token参数。
         * @example `当响应中的IsTruncated为true且NextContinuationToken非空时，使用该字段作为下一次list请求的continuation-token参数。`
         */
        NextContinuationToken: string;
    };
}
