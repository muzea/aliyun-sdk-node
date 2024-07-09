export interface CreateStoreViewRequest {
    /**
     * 日志项目名称。
     * @example `example-project`
     */
    "project": string;
    /**
     * 数据集配置。
     */
    "body"?: {
        /**
         * 数据集名称。
         * @example `my_storeview`
         */
        name: string;
        /**
         * 数据集类型，支持两种类型，当创建时序库数据集时 storeType 指定为 metricstore ，当创建日志库数据集时， storeType 指定为 logstore 。
         * @example `logstore`
         */
        storeType: string;
        /**
         * 日志库或者时序库列表。
         */
        stores: any[];
    };
}
