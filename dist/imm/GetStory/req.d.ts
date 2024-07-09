export interface GetStoryRequest {
    /**
     * 项目名称。获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称。获取方式请参见[创建数据集](~~478160~~)。
     * @example `test-dataset`
     */
    "DatasetName": string;
    /**
     * 指定要获取信息的故事对象ID。
     * @example `id1`
     */
    "ObjectId": string;
}
