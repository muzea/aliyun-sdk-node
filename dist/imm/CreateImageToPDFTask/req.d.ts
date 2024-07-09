export interface CreateImageToPDFTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 输入图片列表，转换顺序为输入列表URI的顺序。
     */
    "Sources": {
        /**
         * 源图片的OSS地址。
         * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
         * 支持的图片格式：jpg、jp2、png、tiff、webp、bmp、svg。
         * @example `oss://examplebucket/sampleobject.jpg`
         */
        URI: string;
        /**
         * 图片旋转角度。可取值如下：
         * - 0（默认）
         * - 90
         * - 180
         * - 270
         * @example `90`
         */
        Rotate: number;
    }[];
    /**
     * 输出图片存储的OSS地址。
     * OSS地址规则为oss://${bucketname}/${objectname}，其中${bucketname}为和当前项目处于同一地域的OSS Bucket名称，${objectname}为包含文件名称的文件路径。
     * @example `oss://examplebucket/outputDocument.pdf`
     */
    "TargetURI": string;
    /**
     * 用户自定义信息，在异步消息通知中会为您返回，用于方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `test-data`
     */
    "UserData"?: string;
    /**
     * 链式授权配置。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * 自定义标签，用于对异步任务进行搜索、过滤。
     * @example `{
          "User": "Jane"
    }`
     */
    "Tags"?: any;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
}
