export interface DescribeDBInstanceTDEResponse {
    /**
     * 实例级别的TDE状态，取值：
     * - **Enabled**
     * - **Disabled**
     * @example `Enabled`
     */
    TDEStatus: string;
    /**
     * 请求ID。
     * @example `C816A4BF-A6EC-4722-95F9-2055859CCFD2`
     */
    RequestId: string;
    Databases: {
        /**
         * 数据库级别的TDE状态列表。
         * >对于SQL Server 2019标准版和SQL Server企业版实例，可以在实例级别的TDE开启时，控制数据库级别的TDE开启或关闭。
         */
        Database: {
            /**
             * 数据库名称。
             * @example `test02`
             */
            DBName: string;
            /**
             * 数据库级别的TDE状态，取值：
             * - **Enabled**
             * - **Disabled**
             * @example `Enabled`
             */
            TDEStatus: string;
        }[];
    };
    /**
     * 实例级别的TDE加密的密钥方式，取值：
     * - **Aliyun_Generate_Key**
     * - **Customer_Provided_Key**
     * - **Unknown**
     * @example `Aliyun_Generate_Key`
     */
    TDEMode: string;
}
