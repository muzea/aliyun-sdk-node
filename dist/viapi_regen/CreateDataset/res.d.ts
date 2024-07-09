export interface CreateDatasetResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `F1138931-D4AE-0471-A8C9-0814D7513C2D`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 数据集ID。
         * @example `148`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1634199437188`
         */
        GmtCreate: number;
        /**
         * 数据集名称。
         * @example `test2`
         */
        Name: string;
        /**
         * 数据集描述。
         * @example `test2`
         */
        Description: string;
    };
}
