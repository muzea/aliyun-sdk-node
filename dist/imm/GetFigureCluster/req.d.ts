export interface GetFigureClusterRequest {
    /**
     * 项目名称，获取方式请参见[CreateProject](~~CreateProject~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 数据集名称，获取方式请参见[CreateDataset](~~CreateDataset~~)。
     * @example `dataset001`
     */
    "DatasetName": string;
    /**
     * 聚类分组的对象ID。获取方式请参见[QueryFigureClusters](~~QueryFigureClusters~~)返回的人脸分组信息。
     * @example `Cluster-1f2e1a2c-d5ee-4bc5-84f6-fef94ea****`
     */
    "ObjectId": string;
}
