export interface GetMetaTableLineageResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `0bc1ec92159376`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 业务数据。
     */
    Data: {
        /**
         * 分页的逻辑，请根据请求返回参数HasNext=true和key填写。
         * @example `odps.tt.2`
         */
        NextPrimaryKey: string;
        /**
         * 是否还有下一页。
         * @example `true`
         */
        HasNext: boolean;
        /**
         * 表信息。
         */
        DataEntityList: {
            /**
             * 表的名称。
             * @example `name`
             */
            TableName: string;
            /**
             * 表的唯一标识。
             * @example `odps.tt.name`
             */
            TableGuid: string;
            /**
             * 创建时间
             * @example `1638720736000`
             */
            CreateTimestamp: number;
            /**
             * 数据库名称
             * @example `db1`
             */
            DatabaseName: string;
        }[];
    };
}
