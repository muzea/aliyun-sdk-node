export interface UpdateStoreViewRequest {
    /**
     * 日志项目名称
     * @example `example-project`
     */
    "project": string;
    /**
     * 数据集名称。
     * @example `my_storeview`
     */
    "name": string;
    /**
     * 数据集配置。
     */
    "body"?: {
        /**
         * 数据集类型
         * @example `logstore`
         */
        storeType: string;
        /**
         * 日志库或者时序库列表。
         */
        stores: any[];
    };
}
