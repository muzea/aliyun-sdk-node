export interface GetMetaDBInfoResponse {
    /**
     * 请求ID。
     * @example `0bc1411515937****`
     */
    RequestId: string;
    /**
     * 基本元数据信息。
     */
    Data: {
        /**
         * 数据库类型。
         * @example `hive`
         */
        Type: string;
        /**
         * 备注。
         * @example `备注`
         */
        Comment: string;
        /**
         * 创建引擎的时间。
         * @example `1541576644000`
         */
        CreateTime: number;
        /**
         * 工作空间ID。
         * @example `22`
         */
        ProjectId: number;
        /**
         * 工作空间的名称。
         * @example `test`
         */
        ProjectName: string;
        /**
         * 引擎ID，格式为`引擎类型.引擎名称`。
         * @example `odps.engine_name`
         */
        AppGuid: string;
        /**
         * 工作空间Owner的名称。
         * @example `my_name`
         */
        OwnerName: string;
        /**
         * 工作空间Owner的云账号ID。
         * @example `userId`
         */
        OwnerId: string;
        /**
         * 环境类型：0表示非生产表，1表示生产表。
         * @example `1`
         */
        EnvType: number;
        /**
         * 工作空间的显示名称。
         * @example `测试项目`
         */
        ProjectNameCn: string;
        /**
         * 服务地址Endpoint。
         * @example `http://service.odpsstg.aliyun-inc.com/`
         */
        Endpoint: string;
        /**
         * emr集群id。
         * @example `abc`
         */
        ClusterBizId: string;
        /**
         * 数据库名称。
         * @example `abc`
         */
        Name: string;
        /**
         * emr数据库对应数据存储地址。
         * @example `hdfs://`
         */
        Location: string;
        /**
         * 租户ID。
         * @example `233`
         */
        TenantId: number;
        /**
         * 修改引擎的时间。
         * @example `1541576644000`
         */
        ModifyTime: number;
    };
}
