export interface BatchGetFigureClusterRequest {
    /**
     * 项目名称。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称。
     * @example `test-dataset`
     */
    "DatasetName": string;
    /**
     * 分组对象ID数组。
     */
    "ObjectIds": string[];
}
