export interface DescribeWebLockExclusiveFileTypeResponse {
    /**
     * 查询到查询排除文件类型的总数量。
     * @example `30`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `9CCD7D51-5E81-5FF5-BD74-813DDD248430`
     */
    RequestId: string;
    /**
     * 网页防篡改排除文件的类型列表。
     */
    ExclusiveFileType: string[];
}
