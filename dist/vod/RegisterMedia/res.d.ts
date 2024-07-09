export interface RegisterMediaResponse {
    /**
     * 请求ID。
     * @example `14F43C5C-8033-448B-AD04F64E5098****`
     */
    RequestId: string;
    /**
     * 注册失败的文件地址列表。
     */
    FailedFileURLs: string[];
    /**
     * 本次注册成功的Media列表，包括新增注册和已注册成功过的文件。
     */
    RegisteredMediaList: {
        /**
         * 新注册或重复注册。
         * - **true**：表示新注册。
         * - **false**：表示重复注册。
         * @example `false`
         */
        NewRegister: boolean;
        /**
         * OSS文件地址。
         * @example `http://****.oss-cn-shanghai.aliyuncs.com/vod_sample_01.mp4`
         */
        FileURL: string;
        /**
         * 点播媒体ID。当注册的媒体文件为音视频时，对应点播的VideoId。
         * @example `d97af32828084d1896683b1aa38****`
         */
        MediaId: string;
    }[];
}
