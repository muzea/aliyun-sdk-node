export interface CreateFileCompressionTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 待压缩的文件列表和打包规则描述。
     * > 与参数SourceManifestURI二选一。Sources支持最多100条打包规则，超长请使用参数SourceManifestURI。
     */
    "Sources"?: {
        /**
         * 待压缩的目录或文件的OSS地址。
         * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}` 说明如下：
         * - 压缩目录时，`${Object}`为目录名称。
         * - 压缩文件时，`${Object}`为包含文件扩展名的文件完整路径。
         * @example `oss://test-bucket/test-object`
         */
        URI: string;
        /**
         * 重定向待压缩文件在压缩包中的文件路径或重命名文件。
         * - 不填写该参数。保留源目录结构进行压缩，例如源文件地址为`oss://test-bucket/test-dir/test-object.doc`，则压缩包中文件路径为`/test-dir/test-object.doc`。
         * - 重命名文件。重命名压缩包中的文件名称，例如源文件地址为`oss://test-bucket/test-object.jpg`，指定参数**Alias**为`test-rename-object.jpg`，则压缩包中文件名称为`test-rename-object.jpg`。
         * - 重新指定源文件在压缩包中的文件路径。例如源目录地址为`oss://test-bucket/test-dir/`，指定参数**Alias**为`/new-dir/`，则源目录下所有文件都会被压缩到路径`/new-dir/`中。
         * - 指定为`/`，去除源目录结构。
         * >请避免在重命名过程中出现重名文件的情况，出现此情况时压缩包内的重名文件可能无法解压（取决于您使用的解压程序）。
         * @example `/new-dir/`
         */
        Alias: string;
        /**
         * 指定打包规则的匹配模式，包括`prefix`（表示前缀模式）和`fullname`（表示精准匹配），默认为`prefix`。
         * + `prefix`：前缀模式，解析该条打包规则时，前缀模式匹配所有符合规则的文件。
         * + `fullname`：精准匹配，按照规则精准匹配文件，只会匹配到一个文件。
         * @example `fullname`
         */
        Mode: string;
    }[];
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * 文件清单存储的地址。文件清单将Sources结构以JSON格式存储在OSS上，适用于打包文件较多的情况。
     * > 与参数`Sources`二选一。其中`URI`参数必填，`Alias`参数选填，该文件内部结构示例：
     * ```
     * [{"URI":"oss://<bucket>/<object>", "Alias":"/new-dir/new-name"}]
     * ```
     * @example `oss://test-bucket/test-object.json`
     */
    "SourceManifestURI"?: string;
    /**
     * 输出文件的OSS地址。压缩文件将以该路径中的文件名称命名，例如`name.zip`。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://test-bucket/test-target-object.zip`
     */
    "TargetURI": string;
    /**
     * 文件打包压缩类型，默认值为zip。
     * > 目前仅支持zip格式。
     * @example `zip`
     */
    "CompressedFormat"?: string;
    /**
     * 用户自定义信息，在异步消息通知中会为您返回，方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `test-data`
     */
    "UserData"?: string;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
}
