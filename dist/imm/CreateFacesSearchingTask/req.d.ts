export interface CreateFacesSearchingTaskRequest {
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
     * 用户自定义信息，在异步消息通知中会为您返回，用于方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `{"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}`
     */
    "UserData"?: string;
    /**
     * 图片列表。
     */
    "Sources"?: {
        /**
         * 图片的OSS地址。
         * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
         * @example `oss://test-bucket/test-object`
         */
        URI: string;
    }[];
    /**
     * 最相似的N个人脸，取值范围为0~100，默认值为5。
     * @example `100`
     */
    "MaxResult"?: number;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
}
