export interface ListObjectScanEventResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7BC55C8F-226E-5AF5-9A2C-2EC43864****`
     */
    RequestId: string;
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `253`
         */
        TotalCount: number;
    };
    /**
     * 数据详情。
     */
    Data: {
        /**
         * 文件在OSS Bucket中的存储Key。
         * @example `1/2023/07/21/10/18/16899059356518bcf6c64-a04e-492d-a421-4ae8b888****`
         */
        OssKey: string;
        /**
         * 文件MD5值。
         * @example `5b394b54ca632fe51c4ab4a6dbaf****`
         */
        Md5: string;
        /**
         * Bucket名称。
         * @example `hz-new01****`
         */
        BucketName: string;
        /**
         * 扫描出的告警的风险等级。取值：
         * - **high**：高危。
         * - **medium**：中危。
         * - **low**：低危。
         * @example `medium`
         */
        RiskLevel: string;
        /**
         * 数据来源。取值：
         * - **API**：API检测
         * - **OSS**：OSS检测
         * @example `OSS`
         */
        Source: string;
        /**
         * 文件路径。
         * @example `/usr/local****`
         */
        FilePath: string;
        /**
         * 告警项名称。
         * @example `WebShell`
         */
        EventName: string;
        /**
         * 事件ID。
         * @example `911273`
         */
        EventId: number;
        /**
         * 首次发生时间戳。
         * @example `1694576692000`
         */
        FirstTime: number;
        /**
         * 最新发现时间戳。
         * @example `1694576692000`
         */
        LastTime: number;
        /**
         * 文件Sha256值。
         * @example `3a6fed5fc11392b3ee9f81caf017b48640d7458766a8eb0382899a605b41****`
         */
        Sha256: string;
        /**
         * 文件Sha1值。
         * @example `3c01bdbb26f358bab27f267924aa2c9a03fc****`
         */
        Sha1: string;
        /**
         * 支持云沙箱检出。取值包括：
         * - **true**：支持。
         * - **false**：不支持。
         * @example `true`
         */
        DisplaySandboxResult: string;
        /**
         * 检查项的详细信息。
         */
        Details: {
            /**
             * 详情项名称。
             * @example `DownloadUrl`
             */
            Name: string;
            /**
             * 告警事件显示名称。
             * @example `DownloadUrl`
             */
            NameDisplay: string;
            /**
             * 详情信息类型。
             * @example `html`
             */
            Type: string;
            /**
             * 详情项的值。
             * @example `http://gcx.cn-hangzhou.aliyuncs.com/****`
             */
            Value: string;
            /**
             * 详情项展示的值。
             * @example `http://gcx.cn-hangzhou.aliyuncs.com/****`
             */
            ValueDisplay: string;
        }[];
        /**
         * 是否存在压缩包子文件告警，取值为：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        HasSubEvent: boolean;
    }[];
}
