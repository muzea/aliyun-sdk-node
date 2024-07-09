export interface DescribeWebHostingFileRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****`
     */
    "SpaceId": string;
    /**
     * 文件路径，必传参数。
     * @example `/error.png`
     */
    "FilePath": string;
}
