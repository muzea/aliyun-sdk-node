export interface UpdateDatasetResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `2F7B883D-2BBD-0600-B3F4-25D11957E449`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 数据集ID。
         * @example `120`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1631762186000`
         */
        GmtCreate: number;
        /**
         * 数据集名称。
         * @example `test1`
         */
        Name: string;
        /**
         * 数据集描述。
         * @example `test12`
         */
        Description: string;
    };
}
