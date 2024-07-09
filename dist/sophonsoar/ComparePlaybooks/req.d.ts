export interface ComparePlaybooksRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `f916b93e-e814-459f-9662-xxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 用于比较的第一个发布版本UUID。
     * >调用[DescribePopApiVersionList](~~DescribePopApiVersionList~~)接口可以获取该参数。
     * @example `sflk23423-e814-459f-9662-xxxxx`
     */
    "OldPlaybookReleaseId": number;
    /**
     * 用于比较的第二个发布版本UUID。
     * >调用[DescribePopApiVersionList](~~DescribePopApiVersionList~~)接口可以获取该参数。
     * @example `sfdf2395-e814-459f-9662-xxxxx`
     */
    "NewPlaybookReleaseId": number;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
