export interface QueryDNAJobListResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-D7393642CA58`
     */
    RequestId: string;
    /**
     * DNA作业信息。
     */
    JobList: {
        /**
         * DNA结果链接。
         * @example `http://test_bucket.oss-cn-shanghai.aliyuncs.com/fingerprint/video/search_result/5/5.txt`
         */
        DNAResult: string;
        /**
         * 唯一的视频主键，唯一性由用户保证。
         * @example `3ca84a39a9024f19853b21be9cf9****`
         */
        PrimaryKey: string;
        /**
         * DNA库Id。
         * @example `2288c6ca184c0e47098a5b665e2a12****`
         */
        DBId: string;
        /**
         * 作业创建时间。
         * @example `2022-12-28T03:21:37Z`
         */
        CreationTime: string;
        /**
         * 作业完成时间。
         * @example `2022-12-28T03:21:44Z`
         */
        FinishTime: string;
        /**
         * 作业状态，可取值：
         * - **Queuing**：排队中。
         * - **Analysing**：分析中。
         * - **Success**：成功。
         * - **Fail**：失败。
         * @example `Queuing`
         */
        Status: string;
        /**
         * 作业执行错误信息。
         * @example `"The resource operated \"a887d0b***d805ef6f7f6786302\" cannot be found"`
         */
        Message: string;
        /**
         * DNA配置。
         * @example `{"SaveType": "save","MediaType"":"video"}`
         */
        Config: string;
        /**
         * 用户自定义数据。
         * @example `testdna`
         */
        UserData: string;
        /**
         * 作业执行错误码。
         * @example `"InvalidParameter.ResourceNotFound"`
         */
        Code: string;
        /**
         * 输入文件。
         */
        Input: {
            /**
             * 输入文件类型，取值：
             * 1. OSS：OSS文件地址
             * 2. Media：媒资ID
             * @example `Media`
             */
            Type: string;
            /**
             * 输入文件信息，支持OSS地址和媒资ID两种。
             * OSS地址规则为
             * 1、oss://bucket/object
             * 2、http(s)://bucket.oss-[regionId].aliyuncs.com/object
             * 其中bucket为和当前项目处于同一区域的oss bucket名称，object为文件路径。
             * @example `1b1b9cd148034739af413150fded****`
             */
            Media: string;
        };
        /**
         * 作业ID。
         * @example `88c6ca184c0e47098a5b665e2a12****`
         */
        Id: string;
    }[];
}
