export interface RefreshUploadMediaResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 媒资ID
     * @example `c2e77390f75271ec802f0674a2ce6***`
     */
    MediaId: string;
    /**
     * 上传地址。
     * >接口返回的上传地址是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAddress。
     * @example `eyJTZWN1cml0a2VuIjoiQ0FJU3p3TjF****`
     */
    UploadAddress: string;
    /**
     * 上传凭证。
     * >接口返回的上传凭证是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAuth。
     * @example `eyJFbmRwb2ludCI6Imm****`
     */
    UploadAuth: string;
}
