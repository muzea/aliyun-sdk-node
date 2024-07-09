export interface DescribeTaskErrorLogResponse {
    /**
     * 请求id。
     * @example `F929E952-EBFC-56C3-BD35-BF8B59024C69`
     */
    RequestId: string;
    /**
     * 错误日志的列表。
     */
    Logs: {
        /**
         * 日志的文本内容。
         * @example `mv: cannot move 'CentOS-Base.repo' to 'CentOS-Base.repo.backup': Permission denied`
         */
        Text: string;
    }[];
}
