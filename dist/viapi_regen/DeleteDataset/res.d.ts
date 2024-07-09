export interface DeleteDatasetResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `09F9AD81-3443-0CE5-87D2-808777B2F758`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 数据集ID。
         * @example `147`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1631762186000`
         */
        GmtCreate: number;
        /**
         * 数据集名称。
         * @example `test`
         */
        Name: string;
        /**
         * 数据集描述。
         * @example `test`
         */
        Description: string;
    };
}
