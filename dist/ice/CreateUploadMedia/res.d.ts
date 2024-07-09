export interface CreateUploadMediaResponse {
    /**
     * 请求ID。
     * @example `4E84BE44-58A7-****-****-FBEBEA16EF94`
     */
    RequestId: string;
    /**
     * 媒资ID。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    MediaId: string;
    /**
     * 媒资地址。
     * > 如果配置了CDN域名则返回CDN地址，否则为OSS地址。说明如果返回的MediaURL在浏览器无法访问（403），是因为您开启了点播域名的鉴权功能。可关闭URL鉴权或自助生成鉴权签名。
     * @example `https://xxq-live-playback.oss-cn-shanghai.aliyuncs.com/capture/5d96d2b4-111b-4e5d-a0e5-20f44405bb55.mp4`
     */
    MediaURL: string;
    /**
     * 文件OSS地址（不带鉴权）。
     * @example `http://outin-***.oss-cn-north-2-gov-1.aliyuncs.com/sv/40360f05-181f63c3110-0004-cd8e-27f-de3c9.mp4`
     */
    FileURL: string;
    /**
     * 上传地址。
     * >接口返回的上传地址是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAddress。
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
