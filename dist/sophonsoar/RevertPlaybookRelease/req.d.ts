export interface RevertPlaybookReleaseRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `185295a1-c987-4b64-8796-xxxxxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 剧本发布版本的ID。
     * >调用[DescribePlaybookReleases](~~DescribePlaybookReleases~~)接口可以获取该参数。
     * @example `3f97b56e-064e-47e7-a309-xxxxxxx`
     */
    "PlayReleaseId": number;
    /**
     * 回滚版本后，是否直接发布。
     * - **true**（默认）：发布并回滚
     * - **false**：不发布，只回滚
     * @example `true`
     */
    "IsPublish"?: boolean;
}
