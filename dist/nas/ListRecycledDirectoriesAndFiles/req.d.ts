export interface ListRecycledDirectoriesAndFilesRequest {
    /**
     * 文件系统ID。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 待查询目录的FileId。
     * 您可以通过调用[ListRecentlyRecycledDirectories ](~~2412173~~)接口查询FileId信息。
     * @example `04***08`
     */
    "FileId": string;
    /**
     * 下一页标识，首次查询无需传入。
     * 如果一次查询结果并没有完整返回所有的文件和目录，则返回NextToken不为空。
     * 您可以在查询中上传正确的NextToken继续查询。
     * @example `1256****25`
     */
    "NextToken"?: string;
    /**
     * 每次查询返回文件或目录的个数。
     * 取值范围：10~1000
     * 默认值：100
     * @example `100`
     */
    "MaxResults"?: number;
}
