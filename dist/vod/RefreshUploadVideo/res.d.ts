export interface RefreshUploadVideoResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A43-7DF6-D7393642****`
     */
    RequestId: string;
    /**
     * 上传地址。
     * >接口返回的上传地址是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAddress。
     * @example `eyJTZWN1cml0eVRiQ0FJU3p3TjFxNkZ0NUIyeW****`
     */
    UploadAddress: string;
    /**
     * 音/视频ID。
     * @example `c6a23a870c8c4ffcd40cbd381333****`
     */
    VideoId: string;
    /**
     * 上传凭证。
     * >接口返回的上传凭证是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAuth。
     * @example `FJU3p3TZ0NUIyeW****`
     */
    UploadAuth: string;
}
