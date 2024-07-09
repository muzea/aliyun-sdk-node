export interface QueryRecordDownloadUrlResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `XXX is mandatory for this action`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 录像文件的生成状态：
         * - **-1**：录像文件生成异常。
         * - **0**：录像文件已生成完毕。
         * - **1**：录像文件正在生成中。
         * @example `0`
         */
        Status: number;
        /**
         * 录像文件的下载地址。
         * 当**Status**为0且**Progress**为100时，该字段才有效。
         * @example `https://link-vision-storage-online.oss-cn-shanghai.aliyuncs.com/transcode%2Fgk-********.mp4?OSSAccessKeyId=LTA*****TTTTTTTT&Expires=16****804&Signature=****`
         */
        Url: string;
        /**
         * 录像文件的生成进度，取值范围为0~100。
         * @example `0`
         */
        Progress: number;
    };
}
