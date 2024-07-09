export interface CreateFigureClustersMergingTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 数据集名称, 获取方式请参见[创建数据集](~~478160~~)。
     * @example `dataset001`
     */
    "DatasetName": string;
    /**
     * 源聚类分组ID，From和Froms至少有一个有值，并且不允许同时有值。
     * @example `Cluster-2ab85905-23ba-4632-b2d8-1c21cfe****`
     */
    "From"?: string;
    /**
     * 目的聚类分组ID。
     * @example `Cluster-4a3a71c1-c092-4788-8826-2f65d17****`
     */
    "To": string;
    /**
     * 用户自定义信息，在异步消息通知中会为您返回，用于方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `{"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}`
     */
    "UserData"?: string;
    /**
     * 自定义标签，用于对异步任务进行搜索、过滤。
     * @example `{"key":"val"}`
     */
    "Tags"?: any;
    /**
     * 源聚类分组ID列表，From和Froms至少有一个有值，并且不允许同时有值。长度不超过100。
     */
    "Froms"?: string[];
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
}
