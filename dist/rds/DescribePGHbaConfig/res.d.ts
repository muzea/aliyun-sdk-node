export interface DescribePGHbaConfigResponse {
    /**
     * pg_hba.conf文件最近一次修改的时间。
     * @example `2021-11-25T06:00:40Z`
     */
    HbaModifyTime: string;
    /**
     * 此参数显示pg_hba.conf文件最近一次修改状态对应的原因。
     * @example `The specified users (testuser) is not exist.`
     */
    ModifyStatusReason: string;
    /**
     * 请求ID。
     * @example `A147A124-A147-5CCF-9609-B73C028848DF`
     */
    RequestId: string;
    /**
     * pg_hba.conf文件最近一次修改的状态。返回值如下：
     * - **success**：成功
     * - **setting**：设置中
     * - **failed**：失败
     * @example `success`
     */
    LastModifyStatus: string;
    DefaultHbaItems: {
        /**
         * pg_hba.conf文件的默认配置项列表。
         */
        HbaItem: {
            /**
             * 连接类型，固定值：host。
             * @example `host`
             */
            Type: string;
            /**
             * 掩码，固定为空。
             * @example `null`
             */
            Mask: string;
            /**
             * 数据库名称，固定值：all和replication。
             * @example `all`
             */
            Database: string;
            /**
             * 优先级，自动生成。
             * @example `0`
             */
            PriorityId: number;
            /**
             * IP地址，固定值：0.0.0.0/0。
             * @example `0.0.0.0/0`
             */
            Address: string;
            /**
             * 认证方式对应配置参数，固定为空。
             * @example `null`
             */
            Option: string;
            /**
             * 认证方式，固定值：md5。
             * @example `md5`
             */
            Method: string;
            /**
             * 用户名，固定值：all。
             * @example `all`
             */
            User: string;
        }[];
    };
    RunningHbaItems: {
        /**
         * pg_hba.conf文件的当前配置项列表。
         */
        HbaItem: {
            /**
             * 连接类型，返回值如下：
             * *  **host**：该条记录验证TCP/IP连接，包括SSL连接和非SSL连接。
             * * **hostssl**：该条记录只验证通过SSL建立的TCP/IP连接。
             * * **hostnossl**：该条记录只验证通过非SSL建立的TCP/IP连接。
             * @example `host`
             */
            Type: string;
            /**
             * 掩码。
             * @example `null`
             */
            Mask: string;
            /**
             * 数据库名。
             * @example `all`
             */
            Database: string;
            /**
             * 优先级。
             * @example `3`
             */
            PriorityId: number;
            /**
             * 客户端IP地址。
             * @example `0.0.0.0/0`
             */
            Address: string;
            /**
             * 认证方式对应的配置参数。不需要配置时，置为空。
             * @example `null`
             */
            Option: string;
            /**
             * 认证方式。
             * @example `md5`
             */
            Method: string;
            /**
             * 用户名。
             * @example `all`
             */
            User: string;
        }[];
    };
    /**
     * 实例ID。
     * @example `rm-bp1****`
     */
    DBInstanceId: string;
}
