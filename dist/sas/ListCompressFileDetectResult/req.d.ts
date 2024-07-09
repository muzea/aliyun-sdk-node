export interface ListCompressFileDetectResultRequest {
    /**
     * 访问源IP地址。
     * @example `27.9.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 文件标识，目前仅支持 md5。
     * @example `0a212417e65c26ff133cfff28f6c****`
     */
    "HashKey"?: string;
    /**
     * 分页查询时，显示的当前页的页码。默认值为1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为20。
     * @example `20`
     */
    "PageSize": number;
}
