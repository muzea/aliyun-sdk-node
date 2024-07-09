export interface UpdateLabelsetResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `0F4A8D73-BC91-0DFA-91D1-77083C4DB14F`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 标注集ID。
         * @example `188`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1633745786000`
         */
        GmtCreate: number;
        /**
         * 标注名称。
         * @example `test2`
         */
        Name: number;
        /**
         * 标注描述。
         * @example `test2`
         */
        Description: number;
    };
}
