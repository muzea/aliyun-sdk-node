export interface GetMetaTableChangeLogResponse {
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
         * 请求的数据页数，用于翻页。
         * @example `10`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `1`
         */
        PageSize: number;
        /**
         * 表的总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 实例列表。
         */
        DataEntityList: {
            /**
             * 变更主体的类别，包括TABLE和PARTITION。
             * @example `TABLE`
             */
            ObjectType: string;
            /**
             * 修改表的时间。
             * @example `1590722845000`
             */
            ModifiedTime: number;
            /**
             * 创建表的时间。
             * @example `1590722845000`
             */
            CreateTime: number;
            /**
             * 变更的内容。
             * @example `"[{\"action\":\"ADD_COLUMN\",\"value\":[{\"originName\":\"\",\"originType\":\"\",\"originComment\":\"\",\"name\":\"id\",\"type\":\"struct<name:string>\",\"comment\":\"\"}]}]",`
             */
            ChangeContent: string;
            /**
             * 操作者的名称。
             * @example `abc`
             */
            Operator: string;
            /**
             * 变更的类型。
             * @example `CREATE_TABLE`
             */
            ChangeType: string;
        }[];
    };
}
