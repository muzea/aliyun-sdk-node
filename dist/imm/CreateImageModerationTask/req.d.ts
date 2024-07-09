export interface CreateImageModerationTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 用户自定义信息，在异步消息通知中会为您返回，方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `test-data`
     */
    "UserData"?: string;
    /**
     * 图片的OSS地址。
     * OSS地址规则为`oss://<Bucket>/<Object>`，其中`<Bucket>`为和当前项目处于同一地域(Region)的OSS Bucket名称，`<Object>`为包含文件扩展名的文件完整路径。
     * @example `oss://test-bucket/test-object`
     */
    "SourceURI": string;
    /**
     * 自定义标签，用于对异步任务进行搜索、过滤。
     * @example `{
          "User": "Jane"
    }`
     */
    "Tags"?: any;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * 图片检测场景。
     */
    "Scenes"?: string[];
    /**
     * 截帧频率，GIF图、长图检测专用。默认值为1。
     * @example `2`
     */
    "Interval"?: number;
    /**
     * 最大截帧数量，GIF图、长图检测专用，默认值为1。
     * @example `10`
     */
    "MaxFrames"?: number;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
}
