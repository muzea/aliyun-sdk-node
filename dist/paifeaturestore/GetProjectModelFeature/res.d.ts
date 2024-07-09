export interface GetProjectModelFeatureResponse {
    /**
     * 请求ID。
     * @example `6B662A64-E4BF-56F8-BF5F-4C63F34EC0A8`
     */
    RequestId: string;
    /**
     * 模型特征ID。
     * @example `3`
     */
    ModelFeatureId: string;
    /**
     * 项目ID。
     * @example `3`
     */
    ProjectId: string;
    /**
     * 项目名称。
     * @example `project1`
     */
    ProjectName: string;
    /**
     * 模型特征名称。
     * @example `model_feature_1`
     */
    Name: string;
    /**
     * 模型特征创建人。
     * @example `12324325324****`
     */
    Owner: string;
    /**
     * Label表ID。
     * @example `3`
     */
    LabelTableId: string;
    /**
     * Label表数据源ID。
     * @example `3`
     */
    LabelDatasourceId: string;
    /**
     * Label表基于的数据表名称。
     * @example `table1`
     */
    LabelDatasourceTable: string;
    /**
     * 事件时间字段。
     * @example `dt`
     */
    LabelEventTime: string;
    /**
     * 导出的训练集表。
     * @example `model_feature_xxx_training_set`
     */
    TrainingSetTable: string;
    /**
     * 训练集特征生成表。
     * @example `table2`
     */
    TrainingSetFGTable: string;
    /**
     * 创建时间。
     * @example `2023-07-04T14:46:22.227+08:00`
     */
    GmtCreateTime: string;
    /**
     * 更新时间。
     * @example `2023-07-04T14:46:22.227+08:00`
     */
    GmtModifiedTime: string;
    /**
     * 特征列表。
     */
    Features: {
        /**
         * 特征视图ID。
         * @example `3`
         */
        FeatureViewId: string;
        /**
         * 特征视图名称。
         * @example `feature_view1`
         */
        FeatureViewName: string;
        /**
         * 特征名称。
         * @example `feature1`
         */
        Name: string;
        /**
         * 特征类型，可选值包括：
         * ● INT32
         * ● INT64
         * ● FLOAT
         * ● DOUBLE
         * ● STRING
         * ● BOOLEAN
         * ● TIMESTAMP
         * @example `INT32`
         */
        Type: string;
        /**
         * 特征别名。
         * @example `feature2`
         */
        AliasName: string;
    }[];
}
