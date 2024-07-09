export interface CreateUploadStreamResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 媒资ID。
     * @example `****c469e944b5a856828dc2****`
     */
    MediaId: string;
    /**
     * 文件OSS地址（不带鉴权）。
     * @example `http://outin-***.oss-cn-shanghai.aliyuncs.com/stream/48555e8b-181dd5a8c07/48555e8b-181dd5a8c07.mp4`
     */
    FileURL: string;
    /**
     * 上传地址。
     * > 接口返回的上传地址是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAddress。
     * @example `eyJTZWN1cml0a2VuIjoiQ0FJU3p3TjF****`
     */
    UploadAddress: string;
    /**
     * 上传凭证。
     * > 接口返回的上传凭证是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAuth。
     * @example `eyJFbmRwb2ludCI6Imm****`
     */
    UploadAuth: string;
}
