export interface DescribeNumberDistrictInfoStatusResponse {
    /**
     * Http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 消息。
     * @example `successful.`
     */
    Message: string;
    /**
     * 请求id
     * @example `66165274-82CC-5E7D-96D7-89143BAEA138`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 号码库状态
     * @example `Empty`
     */
    Status: string;
    /**
     * 已生效的号码库版本信息
     */
    AppliedVersion: {
        /**
         * 版本ID
         * @example `402681645884289024`
         */
        VersionId: string;
        /**
         * 号码库文件名
         * @example `3.mkv`
         */
        FileName: string;
        /**
         * 号码库文件大小
         * @example `93`
         */
        FileSize: number;
    };
    /**
     * 正在解析的号码库
     */
    ParsingVersion: {
        /**
         * 版本ID
         * @example `64615`
         */
        VersionId: string;
        /**
         * 号码库文件名
         * @example `template (3).xlsx`
         */
        FileName: string;
        /**
         * 号码库文件大小
         * @example `659968`
         */
        FileSize: number;
        /**
         * 号码库解析进度
         * @example `10`
         */
        ParseProgress: number;
    };
}
