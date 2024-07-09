export interface ListAudioFilesResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `53223330-EBF1-586B-A2CB-93C3B711FDA0`
     */
    RequestId: string;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 音频文件列表。
         */
        List: {
            /**
             * 音频文件名称。
             * @example `test-file.wav`
             */
            AudioFileName: string;
            /**
             * 音频资源文件在OSS中的Key。
             * @example `ccc-test/test-file.wav`
             */
            OssFileKey: string;
            /**
             * 音频资源的最后修改时间。
             * @example `2021-03-08 15:34:49.0`
             */
            UpdatedTime: string;
            /**
             * 音频资源ID，音频文件的唯一标识。
             * @example `d5cd7a94-3b6a-47d2-b7fd-0b1cd839bf77`
             */
            AudioResourceId: string;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 音频资源的展示名。
             * @example `欢迎语`
             */
            Name: string;
            /**
             * 音频资源的创建时间。
             * @example `2021-03-05 17:35:45.0`
             */
            CreatedTime: string;
            /**
             * 音频文件状态。
             * @example `Completed`
             */
            Status: string;
            /**
             * 音频文件用途，默认为General(用于IVR等场景), 其他可选值为HoldMusic(通话保持等待音)。
             * @example `General`
             */
            Usage: string;
            /**
             * 音频内容风险审核结果。
             * @example `无`
             */
            AuditResult: string;
        }[];
    };
}
