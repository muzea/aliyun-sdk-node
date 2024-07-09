export interface AppendObjectRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object完整路径。
     * @example `exampledir/exampleobject/txt`
     */
    "key": string;
    /**
     * 用于指定从何处进行追加。 每次操作成功后，响应消息头x-oss-next-append-position会标明下一次追加的position。首次追加操作的position必须为0，后续追加操作的position是Object的当前大小。例如，第一次AppendObject请求指定position值为0，content-length是65536，则第二次AppendObject需要指定position为65536。
     * - 当position值为0，且不存在同名Object时，则AppendObject与PutObject请求类似，即允许设置x-oss-server-side-encryption等请求头。如果加入了正确的x-oss-server-side-encryption头，那么后续的AppendObject响应头部也会包含x-oss-server-side-encryption头。后续如需更改元数据，可以使用CopyObject接口。
     * - 在position值正确的情况下，对已存在的Appendable Object追加一个大小为0的内容，该操作不会改变Object的状态。
     * @example `0`
     */
    "position": number;
    /**
     * 指定服务器端加密方式。
     * 合法值：
     * - AES256：使用OSS完全托管密钥进行加解密（SSE-OSS）。
     * - KMS：使用KMS托管密钥进行加解密。
     * - SM4：国密SM4算法。
     * @example `AES256`
     */
    "x-oss-server-side-encryption"?: string;
    /**
     * 指定Object的访问权限。 取值范围如下：
     * - default（默认）：Object遵循所在存储空间的访问权限。
     * - private：Object是私有资源。只有Object的拥有者和授权用户有该Object的读写权限，其他用户没有权限操作该Object。
     * - public-read：Object是公共读资源。只有Object的拥有者和授权用户有该Object的读写权限，其他用户只有该Object的读权限。请谨慎使用该权限。
     * - public-read-write：Object是公共读写资源。所有用户都有该Object的读写权限。请谨慎使用该权限。
     * 关于访问权限的更多信息，请参见[读写权限ACL](~~100676~~)。
     */
    "x-oss-object-acl"?: any;
    /**
     * 指定Object的存储类型。取值范围如下：
     * - Standard：标准存储
     * -  IA：低频访问
     * - Archive：归档存储
     * 对于任意存储类型的Bucket，如果上传Object时指定此参数，则此次上传的Object将存储为指定的类型。例如在IA类型的Bucket中上传Object时，如果指定x-oss-storage-class为Standard，则该Object直接存储为Standard。
     * 关于存储类型的更多信息，请参见存储类型介绍。
     * ><notice> 该值仅在首次执行AppendObject操作时有效，后续追加时不生效。
     */
    "x-oss-storage-class"?: any;
    /**
     * 创建AppendObject时可以添加x-oss-meta-*，继续追加时不可以携带此参数。如果配置以x-oss-meta-*为前缀的参数，则该参数视为元数据。
     * 元数据大小限制：一个Object可以包含多个元数据，但所有的元数据总大小不能超过8 KB。
     * 元数据命名规则：支持短划线（-）、数字、英文字母（a~z）。英文字符的大写字母会被转成小写字母，不支持下划线（_）在内的其他字符。
     * @example `x-oss-meta-location`
     */
    "x-oss-meta-*"?: any;
    /**
     * 指定该Object的网页缓存行为。更多信息，请参见**[RFC2616](https://www.ietf.org/rfc/rfc2616.txt)**。
     * 默认值：无
     * @example `no-cache`
     */
    "Cache-Control"?: string;
    /**
     * 指定该Object被下载时的名称。更多信息，请参见**[RFC2616](https://www.ietf.org/rfc/rfc2616.txt)**。
     * 默认值：无
     * @example `attachment;filename=oss_download.jpg`
     */
    "Content-Disposition"?: string;
    /**
     * 指定该Object的内容编码格式。更多信息，请参见**[RFC2616](https://www.ietf.org/rfc/rfc2616.txt)**。
     * 默认值：无
     * @example `utf-8`
     */
    "Content-Encoding"?: string;
    /**
     * 是一串由MD5算法生成的值，该请求头用于检查消息内容是否与发送时一致。
     * 获取Content-MD5值：对消息内容（不包括头部）执行MD5算法，获得128比特位数字，然后对该数字进行base64编码。
     * 默认值：无
     * 限制：无
     * @example `ohhnqLBJFiKkPSBO1eNaUA==`
     */
    "Content-MD5"?: string;
    /**
     * 过期时间。更多信息，请参见**[RFC2616](https://www.ietf.org/rfc/rfc2616.txt)**。
     * 默认值：无
     * @example `Wed, 08 Jul 2015 16:57:01 GMT`
     */
    "Expires"?: string;
    /**
     * 请求体。
     * @example `二进制内容`
     */
    "body"?: string;
}
