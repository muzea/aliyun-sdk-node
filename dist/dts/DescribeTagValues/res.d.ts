export interface DescribeTagValuesResponse {
    /**
     * 标签键类型。
     * @example `Custom`
     */
    Category: string;
    /**
     * 请求ID。
     * @example `AD110813-9AD6-5F07-BFC8-4C841309****`
     */
    RequestId: string;
    /**
     * 每页返回标签值的数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 标签值的起始页。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 标签键对应标签值的总数。
     * @example `13`
     */
    TotalCount: number;
    TagValues: string[];
}
