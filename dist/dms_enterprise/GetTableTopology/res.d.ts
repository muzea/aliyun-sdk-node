export interface GetTableTopologyResponse {
    /**
     * 请求ID。
     * @example `F5ED6A40-F344-4C7D-A8F0-5685CA584CA7`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 拓扑信息。
     */
    TableTopology: {
        /**
         * 表在DMS中的唯一识别码GUID（Globally Unique Identifier）。
         * @example `IDB_L_308302.yuyang_test.test_ch`
         */
        TableGuid: string;
        /**
         * 表名。
         * @example `test_ch`
         */
        TableName: string;
        /**
         * 表拓扑信息列表。
         */
        TableTopologyInfoList: {
            /**
             * 表名列表。
             * > 以逗号隔开。
             * @example `test_ch_0000,test_ch_0001,test_ch_0002,test_ch_0003,test_ch_0004,test_ch_0005`
             */
            TableNameList: string;
            /**
             * 逻辑表的表名表达式。
             * > 物理表则不会显示该参数。
             * @example `test_ch_[0000-0005]`
             */
            TableNameExpr: string;
            /**
             * 表数量。
             * @example `6`
             */
            TableCount: number;
            /**
             * 物理库ID。
             * @example `43215`
             */
            DbId: number;
            /**
             * 库搜索名。
             * > 建议您的业务不要强依赖该参数，后续版本的格式可能会发生变化。
             * @example `yuyang_test@localhost:3306[yuyang_test_dev]`
             */
            DbSearchName: string;
            /**
             * 物理库对应的实例ID。
             * @example `4325325`
             */
            InstanceId: number;
            /**
             * 实例RegionId。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 实例资源ID。
             * @example `rm-xxx`
             */
            InstanceResourceId: string;
            /**
             * 实例来源，取值如下：
             * - **RDS**：阿里云数据库实例
             * - **ECS_OWN**：阿里云ECS自建库实例
             * - **PUBLIC_OWN**：公网自建库实例
             * - **VPC_ID**：VPC专线IDC数据库实例
             * - **GATEWAY**：数据库网关实例
             * @example `RDS`
             */
            InstanceSource: string;
            /**
             * 库名。
             * @example `yuyang_test`
             */
            DbName: string;
            /**
             * 数据库类型。
             * @example `mysql`
             */
            DbType: string;
        }[];
        /**
         * 是否为逻辑表，取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        Logic: boolean;
    };
}
