export interface DeleteServiceResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `E8917726-EA0B-0847-8885-FD4491E71CE0`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 服务ID。
         * @example `28`
         */
        Id: number;
    };
}
