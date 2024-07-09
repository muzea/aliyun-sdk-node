export interface IndexFileMetaRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称, 获取方式请参见[创建数据集](~~478160~~)。
     * @example `test-dataset`
     */
    "DatasetName": string;
    /**
     * 需要索引的文件，格式为JSON。请参考结构体定义。
     */
    "File": any;
    "UserData"?: string;
    /**
     * 消息通知配置，详细内容请点击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)元数据索引一栏。
     */
    "Notification"?: any;
}
