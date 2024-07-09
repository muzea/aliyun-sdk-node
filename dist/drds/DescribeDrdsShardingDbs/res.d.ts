export interface DescribeDrdsShardingDbsResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `509BDE17-505A-4B3B-854D-30D3F092502F`
     */
    RequestId: string;
    ShardingDbs: {
        /**
         * 返回结果列表。
         */
        ShardingDb: {
            /**
             * 连接池最小个数。
             * @example `5`
             */
            MinPoolSize: number;
            /**
             * 连接池最大个数。
             * @example `60`
             */
            MaxPoolSize: number;
            /**
             * RDS实例ID。
             * @example `rm-bp1hjzn0yv5j2****`
             */
            DbInstanceId: string;
            /**
             * 连接url。
             * @example `100.100.64.100:11569`
             */
            ConnectUrl: string;
            /**
             * 物理分片名称。
             * @example `TEMP1_1568171495522SABE_KUP4_0000`
             */
            GroupName: string;
            /**
             * 数据库类型。
             * @example `mysql`
             */
            DbType: string;
            /**
             * 空闲超时时间。
             * @example `30`
             */
            IdleTimeOut: number;
            /**
             * 物理分库名。
             * @example `temp1_zhk1_0000`
             */
            ShardingDbName: string;
            /**
             * 控制事务为获取锁而需要等待的时长。
             * @example `5000`
             */
            BlockingTimeout: number;
            /**
             * 结果缓存大小。
             * @example `0`
             */
            PreparedStatementCacheSize: number;
            /**
             * 连接串属性。
             * @example `connectTimeout=3000;autoReconnect=true;failOverReadOnly=false;socketTimeout=900000;rewriteBatchedStatements=true;characterEncoding=utf8`
             */
            ConnectionProperties: string;
            /**
             * 连接RDS的用户名。
             * @example `pg284mi8`
             */
            UserName: string;
            /**
             * 数据库状态。
             * @example `running`
             */
            DbStatus: string;
        }[];
    };
    /**
     * 当前页数。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 每页大小。
     * @example `20`
     */
    PageSize: string;
    /**
     * 返回的列表总数量。
     * @example `1`
     */
    Total: string;
}
