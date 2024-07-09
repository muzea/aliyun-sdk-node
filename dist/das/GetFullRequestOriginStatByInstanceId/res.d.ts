export interface GetFullRequestOriginStatByInstanceIdResponse {
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7172BECE-588A-5961-8126-C216E16B****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 全量请求数据列表。
         */
        List: {
            /**
             * 执行SQL的客户端IP地址。
             * @example `172.26.6****`
             */
            Key: string;
            /**
             * PolarDB-X 2.0数据库实例计算节点平均拉取数据节点的行数。
             * @example `0`
             */
            AvgFetchRows: number;
            /**
             * 平均锁等待时长，单位为秒。
             * @example `0.00009589874265269765`
             */
            AvgLockWaitTime: number;
            /**
             * 平均逻辑读。
             * @example `654.4470327860251`
             */
            AvgLogicalRead: number;
            /**
             * 平均物理异步读取。
             * @example `0`
             */
            AvgPhysicalAsyncRead: number;
            /**
             * 平均物理同步读取。
             * @example `0`
             */
            AvgPhysicalSyncRead: number;
            /**
             * 平均行数。
             * @example `0`
             */
            AvgRows: number;
            /**
             * 平均扫描行数。
             * > 目前支持该字段的数据库：RDS MySQL、RDS PostgreSQL、PolarDB MySQL版。
             * @example `10000`
             */
            AvgExaminedRows: number;
            /**
             * 平均返回行数。
             * @example `10000`
             */
            AvgReturnedRows: number;
            /**
             * 平均修改行数。
             * > 目前支持该字段的数据库：RDS MySQL、PolarDB-X 2.0。
             * @example `10000`
             */
            AvgUpdatedRows: number;
            /**
             * 平均执行耗时。
             * @example `2.499`
             */
            AvgRt: number;
            /**
             * 平均SQL数量。
             * @example `10000`
             */
            AvgSqlCount: number;
            /**
             * 总执行次数。
             * @example `100000`
             */
            Count: number;
            /**
             * 执行次数比例。
             * @example `0.0586`
             */
            CountRate: number;
            /**
             * 数据库名。
             * @example `dbtest01`
             */
            Database: string;
            /**
             * 执行错误次数。
             * @example `1`
             */
            ErrorCount: number;
            /**
             * PolarDB-X 2.0数据库实例计算节点拉取数据节点的行数。
             * @example `200`
             */
            FetchRows: number;
            /**
             * 实例的网络地址。
             * @example `rm-uf6dyi58dm6****.mysql.rds.aliy****.com`
             */
            Ip: string;
            /**
             * 锁等待时长，单位为秒。
             * @example `1089.4177720290281`
             */
            LockWaitTime: number;
            /**
             * 逻辑读。
             * @example `7.434573266E9`
             */
            LogicalRead: number;
            /**
             * 执行SQL的客户端IP地址。
             * @example `172.26.6****`
             */
            OriginHost: string;
            /**
             * 物理异步读取。
             * @example `0`
             */
            PhysicalAsyncRead: number;
            /**
             * 物理同步读取。
             * @example `0`
             */
            PhysicalSyncRead: number;
            /**
             * 端口号。
             * @example `3306`
             */
            Port: number;
            /**
             * PolarDB-X 2.0数据库实例计算节点总更新或返回的行数。
             * @example `0`
             */
            Rows: number;
            /**
             * 总扫描行数。
             * > 目前支持该字段的数据库：RDS MySQL、RDS PostgreSQL、PolarDB MySQL版。
             * @example `10000`
             */
            ExaminedRows: number;
            /**
             * 执行时长大于1秒的SQL数量。
             * @example `2`
             */
            RtGreaterThanOneSecondCount: number;
            /**
             * 耗时比例。
             * @example `0.1384`
             */
            RtRate: number;
            /**
             * SQL的数量。
             * @example `200`
             */
            SqlCount: number;
            /**
             * 总变更行数。
             * @example `200`
             */
            SumUpdatedRows: number;
            /**
             * 版本。
             * @example `1`
             */
            Version: number;
            /**
             * VPC ID。
             * @example `vpc-2zentqj1sk4qmolci****`
             */
            VpcId: string;
        }[];
        /**
         * 总数据量。
         * @example `1`
         */
        Total: number;
    };
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
