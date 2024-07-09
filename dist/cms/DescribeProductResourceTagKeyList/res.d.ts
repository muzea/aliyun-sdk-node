export interface DescribeProductResourceTagKeyListResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    Message: string;
    /**
     * 分页游标，如果有下一页，则该字段有返回值。
     * >该参数只要返回数据，则说明还有下一页。您可以将返回的NextToken作为请求参数再次获得下一页的数据，直到返回为Null，表示获取到了所有的数据。
     * @example `dbc2826f237e****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `945ACAA9-89F2-4A62-8913-076FDEDAA8DB`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
    TagKeys: {
        TagKey: string[];
    };
}
