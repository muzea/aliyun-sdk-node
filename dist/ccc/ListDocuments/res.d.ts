export interface ListDocumentsResponse {
    /**
     * 数据。
     */
    Data: {
        /**
         * scheme
         */
        Schema: {
            /**
             * 实例ID。
             * @example `87b12784-8ce2-40b6-b21f-c49cb3b5501e`
             */
            InstanceId: string;
            /**
             * schame id
             * @example `profile`
             */
            Id: string;
            /**
             * 描述信息
             * @example `-`
             */
            Description: string;
            /**
             * 字段列表
             */
            Properties: any;
            /**
             * 创建时间
             * @example `2020-10-14T09:53:53Z`
             */
            CreatedTime: string;
            /**
             * 更新时间
             * @example `2020-10-14T09:53:53Z
            `
             */
            UpdatedTime: string;
            /**
             * 是否被删除
             * @example `false`
             */
            Deleted: boolean;
        };
        /**
         * 文档列表
         */
        Documents: any[];
        /**
         * 总条目数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 下一页标识。
         * @example `54d1a616d95a4a01ba58967a9115b649`
         */
        NextPageToken: string;
    };
    /**
     * 请求ID。
     * @example `7BEEA660-A45A-45E3-98CC-AFC65E715C23`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息
     * @example `无`
     */
    Message: string;
    /**
     * 响应参数。
     */
    Params: string[];
}
