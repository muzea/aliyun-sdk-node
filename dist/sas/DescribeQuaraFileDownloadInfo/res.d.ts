export interface DescribeQuaraFileDownloadInfoResponse {
    /**
     * 资产唯一标识。
     * @example `4fe8e1cd-3c37-4851-b9de-124da32c****`
     */
    Uuid: string;
    /**
     * 隔离文件ID。
     * @example `123`
     */
    QuaraFileId: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `29874225-EAAC-5415-8501-32DD20FXXXXX`
     */
    RequestId: string;
    /**
     * 下载链接。有效时间5分钟。
     * @example `https://xxxxxxxx.oss-cn-hangzhou-1.aliyuncs.com/xxxxx/xxxxxxxxxxxxxx?Expires=1671448125&OSSAccessKeyId=xxx`
     */
    DownloadUrl: string;
    /**
     * 文件路径。
     * @example `/etc/test`
     */
    Path: string;
    /**
     * 文件MD5值。
     * @example `bb62ef1311bc564377a0378d3axxxxxx`
     */
    Md5: string;
    /**
     * 告警记录标签。
     * @example `6d4ff40a22b15c86adecf2aa48xxxxx`
     */
    Tag: string;
}
