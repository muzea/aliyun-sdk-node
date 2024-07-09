export interface ListTagValuesResponse {
    /**
     * 翻下一页的口令
     * @example `83u29j2dj3dskds`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `65591133-1188-4935-B78F-20F72`
     */
    RequestId: string;
    /**
     * 单页最大结果数
     * @example `50`
     */
    MaxResults: number;
    /**
     * 标签值列表。
     */
    Values: string[];
}
