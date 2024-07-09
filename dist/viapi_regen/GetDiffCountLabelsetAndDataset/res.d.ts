export interface GetDiffCountLabelsetAndDatasetResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `2a78486316511165094166037e1a6e`
     */
    RequestId: string;
    /**
     * 接口返回实体。
     */
    Data: {
        /**
         * 标注集和数量集的数值差。
         * @example `4`
         */
        DiffCount: number;
    };
}
