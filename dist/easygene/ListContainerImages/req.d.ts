export interface ListContainerImagesRequest {
    /**
     * 地域ID
     * @example `cn-shanghai`
     */
    "Location": string;
    /**
     * 翻页Token用来标记当前开始读取的位置，置空表示从头开始
     * @example `0f2cc944-67db-4fb1-bb10-f136cda74bda`
     */
    "NextToken"?: string;
    /**
     * 分页数量
     * @example `10`
     */
    "MaxResults"?: number;
}
