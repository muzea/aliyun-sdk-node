export interface DescribeDownloadTaskResponse {
    /**
     * 任务总数。
     * @example `132`
     */
    TotalCount: number;
    /**
     * 返回结果的请求ID。
     * @example `3F2BED13-F3D0-5984-80D6-D5F298CFEA88`
     */
    RequestId: string;
    /**
     * 任务列表。
     */
    Tasks: {
        /**
         * 任务id。
         * @example `1111`
         */
        TaskId: string;
        /**
         * 任务名称。
         * @example `互联网边界防火墙资产-IPv4`
         */
        TaskName: string;
        /**
         * 任务状态。取值：
         * - **finish**：任务完成。
         * - **start**：任务开始。
         * - **error**：任务失败。
         * - **expire**：任务过期。即任务文件已经失效，无法下载。
         * @example `finish`
         */
        Status: string;
        /**
         * OSS文件地址。
         * @example `https://cfw-table-download-cn.oss-cn-hangzhou.aliyuncs.com/%E4%BA%92%E8%81%94%E7%BD%91%E8%BE%B9%E7%95%8C%E9%98%B2%E7%81%AB%E5%A2%99%E8%B5%84%E4%BA%A7-IPv4_1069.csv?Expires=1708583913&OSSAccessKeyId=****&Signature=******%3D`
         */
        FileURL: string;
        /**
         * 文件大小。
         * @example `24.04KB`
         */
        FileSize: string;
        /**
         * 创建任务的时间。使用秒级时间戳格式表示。
         * @example `1706595827`
         */
        CreateTime: number;
        /**
         * 任务过期的时间。使用秒级时间戳格式表示。
         * @example `1714371828`
         */
        ExpireTime: number;
        /**
         * 任务类型。
         * @example `InternetFirewallAsset`
         */
        TaskType: string;
    }[];
}
