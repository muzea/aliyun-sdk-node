export interface CreateVideoModerationTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 用户自定义信息，在异步消息通知中会为您返回，用于方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `{"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}`
     */
    "UserData"?: string;
    /**
     * 视频的OSS地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://test-bucket/test-object`
     */
    "SourceURI": string;
    /**
     * 自定义标签信息，用于搜索任务。
     * @example `{"test": "val1"}`
     */
    "Tags"?: any;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * 视频检测场景。
     */
    "Scenes"?: string[];
    /**
     * 视频截帧间隔，单位为秒。取值范围为1~600，默认值为1。
     * @example `1`
     */
    "Interval"?: number;
    /**
     * 系统对本次检测的视频进行截帧的张数上限。取值范围为5~3600，默认值为200。
     * @example `200`
     */
    "MaxFrames"?: number;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)元数据索引一栏。
     */
    "Notification"?: any;
}
