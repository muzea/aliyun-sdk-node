export interface GetAudioFileResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `EEE26562-D921-5CB2-AE49-E4C45A42D432`
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
     * 音频文件数据。
     */
    Data: {
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
         * @example `2021-07-14 10:48:43.0`
         */
        UpdatedTime: string;
        /**
         * 音频资源ID，音频文件的唯一标识。
         * @example `c1a06b46-302a-4c6e-928b-a43c0df485cf`
         */
        AudioResourceId: string;
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        /**
         * 音频展示名。
         * @example `欢迎语
        `
         */
        Name: string;
        /**
         * 音频资源的创建时间。
         * @example `2021-07-14 10:48:43.0`
         */
        CreatedTime: string;
    };
}
