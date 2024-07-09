export interface CreateUploadImageResponse {
    /**
     * 图片文件的OSS地址（不带鉴权）。
     * 添加图片水印模板时，该地址可作为[AddWatermark](~~AddWatermark~~)接口的请求参数`FileUrl`。
     * @example `http://example.aliyundoc.com/cover/2017-34DB-4F4C-9373-003AA060****.png`
     */
    FileURL: string;
    /**
     * 请求ID。
     * @example `25818875-5F78-AEF6-D7393642****`
     */
    RequestId: string;
    /**
     * 上传地址。
     * > 接口返回的上传地址是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAddress。
     * @example `eyJTZWN1cmuIjoiQ0FJU3p3TjF****`
     */
    UploadAddress: string;
    /**
     * 图片的访问地址。
     * > 如果返回的ImageURL在浏览器无法访问（403），是因为您开启了点播域名的鉴权功能。可关闭[URL鉴权](~~86090~~)或自助[生成鉴权签名](~~57007~~)。
     * @example `http://example.aliyundoc.com/cover/2017-34DB-4F4C-9373-003AA060****.png`
     */
    ImageURL: string;
    /**
     * 图片ID。可作为[GetImageInfo](~~GetImageInfo~~)、[GetImageInfos](~~GetImageInfos~~)、[UpdateImageInfos](~~UpdateImageInfos~~)、[DeleteImage](~~DeleteImage~~)等接口的请求参数。
     * @example `93ab850b4f6f46e91d24d81d4****`
     */
    ImageId: string;
    /**
     * 上传凭证。
     * > 接口返回的上传凭证是Base64加密后的值。调用SDK或API完成媒资上传时需要对其进行Base64解码后再使用。仅OSS原生SDK或OSS API方式上传需要自行解析UploadAuth。
     * @example `eyJFbmmRCI6Im****`
     */
    UploadAuth: string;
}
