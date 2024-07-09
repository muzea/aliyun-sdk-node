export interface DescribeTagKeysResponse {
    /**
     * 标签类型。
     * @example `Custom`
     */
    Category: string;
    /**
     * 请求ID。
     * @example `AD110813-9AD6-5F07-BFC8-4C841309****`
     */
    RequestId: string;
    /**
     * 每页返回标签的数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 标签的起始页。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 标签键总数。
     * @example `10`
     */
    TotalCount: number;
    TagKeys: string[];
}
