export interface UpdateLocationDateClusterRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称，获取方式请参见[创建数据集](~~478160~~)。
     * @example `test-dataset`
     */
    "DatasetName": string;
    /**
     * 需要更新的分组的ID。
     * @example `location-date-cluster-71dd4f32-9597-4085-a2ab-3a7b0fd0aff9`
     */
    "ObjectId": string;
    /**
     * 分组的标题。您可以为该分组设定一个标题，供展示和搜索。最大1024字节。
     * @example `杭州一日游`
     */
    "Title"?: string;
    /**
     * 该文件的自定义ID。该文件索引到数据集后，作为该行元数据的属性存储，用于和您的业务系统进行关联、对应。您可以根据业务需求传入该值，例如将某个URI关联到您系统内的某个ID。推荐传入全局唯一的值。最大1024字节。
     * @example `member-id-0001`
     */
    "CustomId"?: string;
    /**
     * 文件自定义标签列表。储存您业务自定义的键名、键值对信息，用于在查询时可以据此为筛选项进行检索。最多100组。
     * @example `{
          "UserScore": "5"
    }`
     */
    "CustomLabels"?: any;
}
