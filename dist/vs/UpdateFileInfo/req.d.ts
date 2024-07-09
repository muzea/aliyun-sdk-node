export interface UpdateFileInfoRequest {
    /**
     * 文件ID，对应唯一的文件
     * @example `f-16713accddtgtj6340jgnclhwsg1813f718db2f7`
     */
    "FileId": string;
    /**
     * 文件描述信息
     * @example `测试使用`
     */
    "Description": string;
}
