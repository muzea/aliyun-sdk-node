export interface BatchIndexFileMetaRequest {
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
     * OSS文件列表。以JSON格式的数组表示，最大支持100个。
     */
    "Files": any[];
    "UserData"?: string;
    /**
     * 消息通知配置，详细内容请点击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)元数据索引一栏。
     */
    "Notification"?: any;
}
