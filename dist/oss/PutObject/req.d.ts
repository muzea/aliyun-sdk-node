export interface PutObjectRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object的完整路径。
     * @example `exampledir/exampleobject/txt`
     */
    "key": string;
    /**
     * 指定PutObject操作时是否覆盖同名Object。 当目标Bucket处于已开启或已暂停的版本控制状态时，**x-oss-forbid-overwrite**请求Header设置无效，即允许覆盖同名Object。
     *   - 不指定**x-oss-forbid-overwrite**或者指定**x-oss-forbid-overwrite**为**false**时，表示允许覆盖同名Object。
     *   - 指定**x-oss-forbid-overwrite**为**true**时，表示禁止覆盖同名Object。
     * 设置**x-oss-forbid-overwrite**请求Header会导致QPS处理性能下降，如果您有大量的操作需要使用**x-oss-forbid-overwrite**请求Header（QPS>1000），请联系技术支持，避免影响您的业务。
     * 默认值：**false**
     * @example `false`
     */
    "x-oss-forbid-overwrite"?: boolean;
    /**
     * 创建Object时，指定服务器端加密方式。
     * 取值：**AES256**、**KMS****或**SM4****
     * 指定此选项后，在响应头中会返回此选项，OSS会对上传的Object进行加密编码存储。当下载该Object时，响应头中会包含**x-oss-server-side-encryption**，且该值会被设置成此Object的加密算法。
     * @example `AES256`
     */
    "x-oss-server-side-encryption"?: string;
    /**
     * 创建Object时，指定服务器端加密方式。
     * 取值：**AES256**、**KMS**或**SM4**
     * 指定此选项后，在响应头中会返回此选项，OSS会对上传的Object进行加密编码存储。当下载该Object时，响应头中会包含**x-oss-server-side-encryption**，且该值会被设置成此Object的加密算法。
     * @example `AES256`
     */
    "x-oss-server-side-data-encryption"?: string;
    /**
     * KMS托管的用户主密钥。
     * 此选项仅在**x-oss-server-side-encryption**为KMS时有效。
     * @example `9468da86-3509-4f8d-a61e-6eab1eac****`
     */
    "x-oss-server-side-encryption-key-id"?: string;
    /**
     * 指定OSS创建Object时的访问权限。
     * 取值：
     * - default（默认）：Object遵循所在存储空间的访问权限。
     * - private：Object是私有资源。只有Object的拥有者和授权用户有该Object的读写权限，其他用户没有权限操作该Object。
     * - public-read：Object是公共读资源。只有Object的拥有者和授权用户有该Object的读写权限，其他用户只有该Object的读权限。请谨慎使用该权限。
     * - public-read-write：Object是公共读写资源。所有用户都有该Object的读写权限。请谨慎使用该权限。
     * 关于访问权限的更多信息，请参见**[读写权限ACL](~~100676~~)**。
     */
    "x-oss-object-acl"?: any;
    /**
     * 指定Object的存储类型。                               对于任意存储类型的Bucket，如果上传Object时指定此参数，则此次上传的Object将存储为指定的类型。例如在IA类型的Bucket中上传Object时，如果指定x-oss-storage-class为Standard，则该Object直接存储为Standard。                              取值：                                 Standard：标准存储                                    IA：低频访问                                    Archive：归档存储                                    ColdArchive：冷归档存储                                    关于存储类型的更多信息，请参见存储类型介绍。
     */
    "x-oss-storage-class"?: any;
    /**
     * 指定Object的标签，可同时设置多个标签，例如TagA=A&TagB=B。
     * > Key和Value需要先进行URL编码，如果某项没有”=“，则看作Value为空字符串。
     * @example `a:1`
     */
    "x-oss-tagging"?: string;
    /**
     * 使用PutObject接口时，如果配置以**x-oss-meta-***为前缀的参数，则该参数视为元数据，例如`x-oss-meta-location`。一个Object可以有多个类似的参数，但所有的元数据总大小不能超过8 KB。
     * 元数据支持短划线（-）、数字、英文字母（a~z）。英文字符的大写字母会被转成小写字母，不支持下划线（_）在内的其他字符。
     * @example `x-oss-meta-location`
     */
    "x-oss-meta-*"?: any;
    /**
     * 请求体。
     * @example `二进制内容`
     */
    "body"?: string;
}
