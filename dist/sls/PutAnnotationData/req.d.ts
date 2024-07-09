export interface PutAnnotationDataRequest {
    /**
     * 数据集唯一标识
     * @example `cb8cc4eb51a85e823471cdb368fae9be`
     */
    "datasetId"?: string;
    /**
     * 数据的唯一标识
     * @example `2156d560fc7c01420542df92cd6365ds`
     */
    "annotationdataId"?: string;
    /**
     * 请求结构体。
     */
    "body"?: {
        /**
         * 原始日志数据
         */
        rawLog: any[];
        /**
         * 数据的结构体
         */
        mlDataParam: any;
    };
}
