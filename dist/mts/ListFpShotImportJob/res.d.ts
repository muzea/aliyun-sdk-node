export interface ListFpShotImportJobResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-D7393642CA58`
     */
    RequestId: string;
    /**
     * 不存在的作业ID列表，无数据时该结构不返回。
     */
    NonExistIds: string[];
    /**
     * 文本DNA导库作业。
     */
    FpShotImportJobList: {
        /**
         * 导库ID。
         * @example `25bacf2824614bcf9273dc0744db****`
         */
        Id: string;
        /**
         * DNA库ID。
         * @example `2288c6ca184c0e47098a5b665e2a12****`
         */
        FpDBId: string;
        /**
         * 作业管道ID。
         * @example `ebb51ee30f0b49aba959823fa991****`
         */
        PipelineId: string;
        /**
         * 导库配置。
         * @example `""`
         */
        FpImportConfig: string;
        /**
         * 导库作业状态。可取值：
         * - Processing：处理中。
         * - Fail：失败。
         * - Success：成功。
         * @example `Success`
         */
        Status: string;
        /**
         * 导库作业错误码。
         * @example `0`
         */
        Code: string;
        /**
         * 导库作业错误信息。
         * @example `Success`
         */
        Message: string;
        /**
         * 创建时间。
         * @example `2020-06-30T00:33:18Z`
         */
        CreateTime: string;
        /**
         * 结束时间。
         * @example `2020-06-30T00:34:02Z`
         */
        FinishTime: string;
        /**
         * 用户自定义数据。
         * @example `001`
         */
        UserData: string;
        /**
         * 输入文件。
         * @example `{\"Bucket\":\"mts-example****\",\"Location\":\"oss-cn-shanghai\",\"Object\":\"test-0828/video/test.mp4\"}`
         */
        Input: string;
        /**
         * 导库任务处理信息。
         * @example `http://testbucket.oss-cn-shanghai.aliyuncs.com/932ajjw***32ssoj_importResult.txt`
         */
        ProcessMessage: string;
    }[];
}
