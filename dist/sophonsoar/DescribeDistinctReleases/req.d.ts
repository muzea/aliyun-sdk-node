export interface DescribeDistinctReleasesRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `bc0b8424-535c-4ed5-bd94-xxxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 剧本XML配置的MD5值。
     * @example `be0a4ef084dd174abe47xxxxx`
     */
    "TaskflowMd5"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
}
