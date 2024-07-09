export interface CreateUploadAttachedMediaResponse {
    /**
     * 辅助媒资文件的OSS地址（不带鉴权）。
     * 添加图片水印模板时，该地址可做为[AddWatermark](~~AddWatermark~~)接口的请求参数`FileUrl`。
     * @example `https://****.oss-cn-shanghai.aliyuncs.com/watermark/****.mov`
     */
    FileURL: string;
    /**
     * 请求ID。
     * @example `73254DE5-F260-4720-D06856B63C01****`
     */
    RequestId: string;
    /**
     * 上传地址。
     * > 接口返回的上传地址是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAddress。
     * @example `LWNuLXNoYW5naGFpLmFsaXl1b****`
     */
    UploadAddress: string;
    /**
     * 媒资ID。
     * @example `97dc17a5abc3668489b84ce9****`
     */
    MediaId: string;
    /**
     * 媒资的访问地址。
     * 如果配置了CDN域名则返回CDN地址，否则为OSS地址。
     * > 如果返回的MediaURL在浏览器无法访问（403），是因为您开启了点播域名的鉴权功能。可关闭[URL鉴权](~~86090~~)或自助[生成鉴权签名](~~57007~~)。
     * @example `http://example.aliyundoc.com/watermark/****.mov?auth_key=****`
     */
    MediaURL: string;
    /**
     * 上传凭证。
     * > 接口返回的上传凭证是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAuth。
     * @example `UzFnUjFxNkZ0NUIZTaklyNWJoQ00zdHF****`
     */
    UploadAuth: string;
}
