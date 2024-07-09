export interface ListRecentlyRecycledDirectoriesRequest {
    /**
     * 文件系统ID。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 下一页标识，首次查询无需传入。
     * 如果一次查询结果并没有完整返回所有的目录，则返回NextToken不为空。您可以在查询中上传正确的NextToken继续查询。
     * @example `1256****25`
     */
    "NextToken"?: string;
    /**
     * 每次查询返回目录的个数。
     * 取值范围：10~1000
     * 默认值：100
     * @example `100`
     */
    "MaxResults"?: number;
}
