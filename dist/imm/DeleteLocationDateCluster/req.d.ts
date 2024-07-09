export interface DeleteLocationDateClusterRequest {
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
     * 需要删除的分组的ID。
     * @example `location-date-cluster-71dd4f32-9597-4085-a2ab-3a7b0fd0aff9`
     */
    "ObjectId": string;
}
