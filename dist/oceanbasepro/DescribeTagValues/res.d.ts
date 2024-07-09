export interface DescribeTagValuesResponse {
    /**
     * 标签组和标签的映射关系。
     * @example `"{\"标签组2\":[\"标签值2-1\",\"标签值2-2\"],\"标签组1\":[\"标签值1-1\"]}"`
     */
    Map: string;
    /**
     * 请求 ID。
     * @example `4C91F7BA-xxxx-xxxx-xxxx-846ECA1A9908`
     */
    RequestId: string;
}
