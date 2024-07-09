export interface CreateDownloadTaskRequest {
    /**
     * 接收消息的语言类型。
     * 取值：
     * - **zh**：（默认）中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 下载任务的请求查询条件。
     * @example `{\"SearchItem\":\"\",\"UserType\":\"buy\",\"IpVersion\":\"4\"}`
     */
    "TaskData"?: string;
    /**
     * 下载文件中时间信息的时区，使用IANA时区标识符。默认为北京时间，即Asia/Shanghai。
     * @example `Asia/Shanghai`
     */
    "TimeZone"?: string;
}
