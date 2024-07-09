export interface DescribeWebLockInclusiveFileTypeResponse {
    /**
     * 查询到的文件防篡改防护文件类型的总数量。
     * @example `15`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CE500770-42D3-442E-9DDD-156E0F9F3B45`
     */
    RequestId: string;
    /**
     * 文件防篡改防护文件类型列表。
     */
    InclusiveFileType: string[];
}
