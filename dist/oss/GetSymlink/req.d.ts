export interface GetSymlinkRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object完整路径。
     * @example `exampledir/exampleobject/txt`
     */
    "key": string;
    /**
     * 获取软链接的当前Object版本。
     * @example `CAEQNRiBgMClj7qD0BYiIDQ5Y2QyMjc3NGZkODRlMTU5M2VkY2U3MWRiNGRh****`
     */
    "versionId"?: string;
}
