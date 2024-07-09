export interface CopyObjectRequest {
    /**
     * Bucket名称。
     * @example `oss-example`
     */
    "bucket": string;
    /**
     * Object完整路径。
     * @example `exampledir/exampleobject.txt`
     */
    "key": string;
    /**
     * 指定拷贝的源地址。
     * 默认值：无
     * @example `/oss-example/oss.jpg`
     */
    "x-oss-copy-source": string;
    /**
     * 指定CopyObject操作时是否覆盖同名目标Object。当目标Bucket处于已开启或已暂停版本控制状态时，**x-oss-forbid-overwrite**请求Header设置无效，即允许覆盖同名Object。
     *   - 未指定**x-oss-forbid-overwrite**或者指定**x-oss-forbid-overwrite**为**false**时，表示允许覆盖同名目标Object。
     *   - 指定**x-oss-forbid-overwrite**为**true**时，表示禁止覆盖同名Object。
     * 设置**x-oss-forbid-overwrite**请求Header会导致QPS处理性能下降，如果您有大量的操作需要使用x-**x-oss-forbid-overwrite**请求Header（QPS>1000），请联系技术支持，避免影响您的业务。
     * 默认值：false
     * @example `true`
     */
    "x-oss-forbid-overwrite"?: string;
    /**
     * 如果源Object的ETag值和您提供的ETag相等，则执行拷贝操作，并返回200 OK。
     * 默认值：无
     * @example `5B3C1A2E053D763E1B002CC607C5****`
     */
    "x-oss-copy-source-if-match"?: string;
    /**
     * 如果源Object的ETag值和您提供的ETag不相等，则执行拷贝操作，并返回200 OK。
     * 默认值：无
     * @example `5B3C1A2E053D763E1B002CC607C5****`
     */
    "x-oss-copy-source-if-none-match"?: string;
    /**
     * 如果指定的时间等于或者晚于文件实际修改时间，则正常拷贝文件，并返回200 OK。
     * 默认值：无
     * @example `2019-04-09T07:01:56.000Z`
     */
    "x-oss-copy-source-if-unmodified-since"?: string;
    /**
     * 如果源Object在用户指定的时间以后被修改过，则执行拷贝操作。
     * 默认值：无
     * @example `2019-04-09T07:01:56.000Z`
     */
    "x-oss-copy-source-if-modified-since"?: string;
    /**
     * 指定如何设置目标Object的元信息。
     *   - **COPY**（默认值）：复制源Object的元数据到目标Object。
     * OSS不会复制源Object的**x-oss-server-side-encryption**属性配置到目标Object。目标Object的服务器端加密编码方式取决于当前拷贝操作是否指定了**x-oss-server-side-encryption**。
     *   - **REPLACE**：忽略源Object的元数据，直接采用请求中指定的元数据。
     * > 如果拷贝操作的源Object地址和目标Object地址相同，且未开启版本控制时，则无论x-oss-metadata-directive为何值，都会忽略源Object的元数据，目标Object将直接采用请求中指定的元数据。
     * @example `COPY`
     */
    "x-oss-metadata-directive"?: string;
    /**
     * 指定OSS创建目标Object时，服务器端熵编码加密算法 。
     * 取值：**AES256**、**KMS**
     * 您只有购买了KMS套件，才能使用KMS加密算法，否则OSS会返回KmsServiceNotEnabled错误。
     *   - 如果拷贝操作中未指定**x-oss-server-side-encryption**，则无论源Object是否进行过服务器端加密编码，拷贝后的目标Object均不进行服务器端加密编码。
     *   - 如果拷贝操作中指定了**x-oss-server-side-encryption**，则无论源Object是否进行过服务器端加密编码，拷贝后的目标Object均会进行服务器端加密编码。并且拷贝操作的响应头中会包含**x-oss-server-side-encryption**，值为目标Object的加密算法。
     * 在目标Object被下载时，响应头中也会包含**x-oss-server-side-encryption**，值为该Object的加密算法。
     * @example `AES256`
     */
    "x-oss-server-side-encryption"?: string;
    /**
     * 指定Object的加密算法。如果未指定此选项，表明Object使用AES256加密算法。此选项仅当x-oss-server-side-encryption为KMS时有效。
     * @example `SM4`
     */
    "x-oss-server-side-data-encryption"?: string;
    /**
     * 表示KMS托管的用户主密钥。
     * 该参数仅在**x-oss-server-side-encryption**为KMS时有效。
     * @example `9468da86-3509-4f8d-a61e-6eab1eac****`
     */
    "x-oss-server-side-encryption-key-id"?: string;
    /**
     * 指定OSS创建目标Object时的访问权限。
     * 取值：
     * - default（默认）：Object遵循所在存储空间的访问权限。
     * - private：Object是私有资源。只有Object的拥有者和授权用户有该Object的读写权限，其他用户没有权限操作该Object。
     * - public-read：Object是公共读资源。只有Object的拥有者和授权用户有该Object的读写权限，其他用户只有该Object的读权限。请谨慎使用该权限。
     * - public-read-write：Object是公共读写资源。所有用户都有该Object的读写权限。请谨慎使用该权限。
     * 关于访问权限的更多信息，请参见**[读写权限ACL](~~100676~~)**。
     */
    "x-oss-object-acl"?: any;
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
     * 指定Object的对象标签，可同时设置多个标签，例如TagA=A&TagB=B。
     * > Key和Value需要先进行URL编码，如果某项没有“=”，则看作Value为空字符串。
     * @example `a:1`
     */
    "x-oss-tagging"?: string;
    /**
     * 指定如何设置目标Object的对象标签。取值如下：
     *   - **Copy**（默认值）：复制源Object的对象标签到目标 Object。
     *   - **Replace**：忽略源Object的对象标签，直接采用请求中指定的对象标签。
     * @example `Copy`
     */
    "x-oss-tagging-directive"?: string;
    /**
     * 如果配置以x-oss-meta-*为前缀的参数，则该参数视为元数据。
     * 元数据大小限制：一个Object可以包含多个元数据，但所有的元数据总大小不能超过8 KB。
     * 元数据命名规则：支持短划线（-）、数字、英文字母（a~z）。英文字符的大写字母会被转成小写字母，不支持下划线（_）在内的其他字符。
     */
    "x-oss-meta-*"?: any;
}
