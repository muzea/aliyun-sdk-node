export interface DescribeFileUploadSignedUrlResponse {
    /**
     * 上传文件地址。
     * @example `https://bsppub.oss-cn-shanghai.aliyuncs.com/FBPSBVMO-myspace/41552d60-52de-xxx-a713-43e879b0717a.JPG?OSSAccessKeyId=LTAIk****dtFueLA&Expires=1582152512&Signature=sek1B0Xm2r***tNvfX9tX%2BBJxA%3D`
     */
    SignUrl: string;
    /**
     * 请求ID。
     * @example `E9A50E1B-5ECE-42D4-B261-C07D1BBE68DE`
     */
    RequestId: string;
    /**
     * 文件唯一标识。
     * @example `2fada31e-8fa5-****-b595-9698cd6b5f06`
     */
    Id: string;
    /**
     * 上传结果回调地址。
     * @example `https://api.next.bspapp.com/oss_upload_callback`
     */
    OssCallbackUrl: string;
    /**
     * 含义是该上传请求是否会覆盖文件。
     * - true：覆盖。
     * - false：不覆盖。
     * @example `true`
     */
    Overwrite: boolean;
}
