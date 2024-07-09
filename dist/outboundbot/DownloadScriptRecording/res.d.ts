export interface DownloadScriptRecordingResponse {
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
     * 接口提示信息
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
     * 参数
     */
    DownloadParams: {
        /**
         * 一个指向录音文件的url，可使用该地址播放或下载。
         * @example `http://tiangong-staging.oss-cn-shanghai.aliyuncs.com/record/281eb174-3865-41c1-9274-7b6813edadab.wav?Expires=1578624046&OSSAccessKeyId=LTAI****cqw&Signature=dL2dxWS6VcdZrvG9xOMOBMSP3Fg%3D`
         */
        SignatureUrl: string;
        /**
         * 录音文件名称
         * @example `281eb174-3865-41c1-9274-7b6813edadab.wav`
         */
        FileName: string;
    };
}
