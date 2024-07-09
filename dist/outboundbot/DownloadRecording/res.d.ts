export interface DownloadRecordingResponse {
    /**
     * Http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 文档下载地址
     */
    DownloadParams: {
        /**
         * 一个指向录音文件的url，使用http下载
         * @example `http://tiangong-staging.oss-cn-shanghai.aliyuncs.com/record/281eb174-3865-41c1-9274-7b6813edadab.wav?Expires=1578624046&OSSAccessKeyId=LTAI****cqw&Signature=dL2dxWS6VcdZrvG9xOMOBMSP3Fg%3D`
         */
        SignatureUrl: string;
        /**
         * 录音文件名，通常为一个uuid
         * @example `281eb174-3865-41c1-9274-7b6813edadab.wav`
         */
        FileName: string;
        /**
         * 分段录音列表，包含文件名和文件url
         * @example `[{"fileName":"10a17c447415424c99491884abe27d8a-1.wav","filePath":"https://ssml-test.oss-cn-shanghai.aliyuncs.com/7253/voiceSlice/10a17c447415424c99491884abe27d8a/10a17c447415424c99491884abe27d8a-1.wav?Expires=1686645470&OSSAccessKeyId=LTA*********kr8M9&Signature=V23OhiV5yIOoouriu6SiWkO9h8E%3D"}]`
         */
        VoiceSliceRecordingListJson: string;
    };
}
