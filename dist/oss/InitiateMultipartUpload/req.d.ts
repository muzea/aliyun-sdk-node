export interface InitiateMultipartUploadRequest {
    /**
     * 初始化一个Multipart Upload事件的Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 初始化一个Multipart Upload事件的Object名称。
     * @example `multipart.data`
     */
    "key": string;
    /**
     * 指定对返回的Key进行编码，目前支持URL编码。Key使用UTF-8字符，但XML 1.0标准不支持解析一些控制字符，例如ASCII值从0到10的字符。对于Key中包含XML
     *                               1.0标准不支持的控制字符，可以通过指定encoding-type对返回的Key进行编码。
     * 默认值：无
     * 可选值：**url**
     */
    "encoding-type"?: any;
    /**
     * 指定InitiateMultipartUpload操作时是否覆盖同名Object。当目标Bucket处于已开启或已暂停的版本控制状态时，**x-oss-forbid-overwrite**请求Header设置无效，即允许覆盖同名Object。
     *   - 不指定**x-oss-forbid-overwrite**或者指定**x-oss-forbid-overwrite**为**false**时，表示允许覆盖同名Object。
     *   - 指定**x-oss-forbid-overwrite**为**true**时，表示禁止覆盖同名Object。
     * 设置**x-oss-forbid-overwrite**请求Header会导致QPS处理性能下降，如果您有大量的操作需要使用**x-oss-forbid-overwrite**请求Header（QPS>1000），请联系技术支持，避免影响您的业务。
     * @example `true`
     */
    "x-oss-forbid-overwrite"?: string;
    /**
     * 指定Object的存储类型。
     * 对于任意存储类型Bucket，如果上传Object时指定该值，则此次上传的Object将存储为指定的类型。例如在IA类型的Bucket中上传Object时，如果指定**x-oss-storage-class**为Standard，则该Object直接存储为Standard类型。
     * 取值：
     * - Standard：标准存储
     * - IA：低频访问
     * - Archive：归档存储
     * - ColdArchive：冷归档存储
     * 关于存储类型的更多信息，请参见**[存储类型介绍](~~51374~~)**。
     */
    "x-oss-storage-class"?: any;
    /**
     * 指定Object的标签，可同时设置多个标签，例如： TagA=A&TagB=B
     * > Key和Value需要先进行URL编码，如果某项没有`=`，则看作Value为空字符串。
     * @example `a:1`
     */
    "x-oss-tagging"?: string;
    /**
     * 指定上传该Object的每个part时使用的服务器端加密方式。
     * 取值：**AES256**、**KMS**或**SM4**
     * > 使用KMS加密算法前，您需要先开通密钥管理服务KMS。
     * 指定此参数后，在响应头中会返回此参数，OSS会对上传的每个part进行加密编码存储。当下载该Object时，响应头中会包含x-oss-server-side-encryption，且该值会被设置成此Object的加密算法。
     * @example `AES256`
     */
    "x-oss-server-side-encryption"?: string;
    /**
     * 指定Object的加密算法。若未指定此选项，表明Object使用AES256加密算法。此选项仅当**x-oss-server-side-encryption**为KMS时有效。
     * 取值：SM4
     * @example `SM4`
     */
    "x-oss-server-side-data-encryption"?: string;
    /**
     * 表示KMS托管的用户主密钥。
     * 该参数在**x-oss-server-side-encryption**值为KMS时有效。
     * @example `9468da86-3509-4f8d-a61e-6eab1eac****`
     */
    "x-oss-server-side-encryption-key-id"?: string;
    /**
     * 指定该Object被下载时的网页的缓存行为。更多信息，请参见**[RFC 2616](https://www.ietf.org/rfc/rfc2616.txt)**。
     * 默认值：无
     * @example `private`
     */
    "Cache-Control"?: string;
    /**
     * 指定该Object被下载时的名称。更多信息，请参见**[RFC 2616](https://www.ietf.org/rfc/rfc2616.txt)**。
     * 默认值：无
     * @example `attachment;filename=oss_download.jpg `
     */
    "Content-Disposition"?: string;
    /**
     * 指定该Object被下载时的内容编码格式。更多信息，请参见**[RFC 2616](https://www.ietf.org/rfc/rfc2616.txt)**。
     * 默认值：无
     * @example `utf-8`
     */
    "Content-Encoding"?: string;
    /**
     * 过期时间，单位为毫秒。更多信息，请参见**[RFC 2616](https://www.ietf.org/rfc/rfc2616.txt)**。
     * 默认值：无
     * @example `Fri, 28 Feb 2012 05:38:42 GMT `
     */
    "Expires"?: string;
}
