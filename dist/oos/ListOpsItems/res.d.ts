export interface ListOpsItemsResponse {
    /**
     * 翻页标记的Token
     * @example `gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC6KPDUL0FIIb`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `113DD533-389C-5F83-9C69-F64D5BAB10B2`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 运维项列表。
     */
    OpsItems: {
        /**
         * 运维项ID。
         * @example `oi-d52b08695e2b46ae8413`
         */
        OpsItemId: string;
        /**
         * 创建时间。
         * @example `2023-07-09T10:01Z`
         */
        CreateDate: string;
        /**
         * 更新时间。
         * @example `2023-07-09T10:01Z`
         */
        UpdateDate: string;
        /**
         * 运维项标题。
         * @example `Test`
         */
        Title: string;
        /**
         * 状态。
         * @example `Open`
         */
        Status: string;
        /**
         * 严重性级别。
         * @example `Medium`
         */
        Severity: string;
        /**
         * 分类。
         * @example `Security`
         */
        Category: string;
        /**
         * 来源业务。
         * @example `/aliyun/ecs`
         */
        Source: string;
        /**
         * 优先级。
         * @example `1`
         */
        Priority: number;
        /**
         * 标签。
         * @example `{"k1":"v1"}`
         */
        Tags: any;
        /**
         * 关联资源ARN列表。
         */
        Resources: string[];
    }[];
    /**
     * 返回结果总数
     * @example `1`
     */
    TotalCount: number;
}
