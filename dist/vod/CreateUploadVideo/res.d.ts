export interface CreateUploadVideoResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-04D5-D7393642****`
     */
    RequestId: string;
    /**
     * 上传地址。
     * > 接口返回的上传地址是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAddress。
     * @example `eyJTZWN1cml0a2VuIjoiQ0FJU3p3TjF****`
     */
    UploadAddress: string;
    /**
     * 音/视频ID。可作为媒资管理、媒体处理、媒体审核等接口的请求参数。
     * @example `93ab850b4f6f54b6e91d24d81d44****`
     */
    VideoId: string;
    /**
     * 上传凭证。
     * > 接口返回的上传凭证是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAuth。
     * @example `eyJFbmRwb2ludCI6Imm****`
     */
    UploadAuth: string;
}
