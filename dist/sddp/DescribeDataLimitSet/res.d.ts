export interface DescribeDataLimitSetResponse {
    /**
     * 返回结果的请求ID。
     * @example `769FB3C1-F4C9-42DF-9B72-7077A8989C13`
     */
    RequestId: string;
    /**
     * 返回授权扫描的实例、库、Bucket等信息。
     */
    DataLimitSet: {
        /**
         * 返回数据的来源产品类型编码。取值：
         * - **ODPS**
         * - **OSS**
         * - **ADS**
         * - **OTS**
         * - **RDS**
         * @example `OSS`
         */
        ResourceTypeCode: string;
        /**
         * 返回数据的来源产品类型。取值：
         * - **1**：表示ODPS。
         * - **2**：表示OSS。
         * - **3**：表示ADS。
         * - **4**：表示OTS。
         * - **5**：表示RDS。
         * @example `2`
         */
        ResourceType: number;
        /**
         * 查询出的资产数量总和。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 授权扫描的数据列表。
         */
        DataLimitList: {
            /**
             * 数据所属地域名称。
             * @example `华东1（杭州）`
             */
            LocalName: string;
            /**
             * 数据安全中心与数据安全中心连接授权的实例、库、Bucket数据间的连通性测试状态。
             * - **2**：连通性测试中。
             * - **3**：连通性测试通过。
             * - **4**：连通性测试未通过。
             * @example `3`
             */
            CheckStatus: number;
            /**
             * 数据连接字符串。
             * @example `连接串`
             */
            Connector: string;
            /**
             * 数据检测状态名称。
             * @example `联通性检测状态`
             */
            CheckStatusName: string;
            /**
             * 数据所属地域ID。
             * @example `cn-****`
             */
            RegionId: string;
            /**
             * 指定待查询资产的父类型资产ID。
             * @example `db`
             */
            ParentId: string;
            /**
             * 数据来源产品类型。取值：
             * - **1**：表示ODPS。
             * - **2**：表示OSS。
             * - **3**：表示ADS。
             * - **4**：表示OTS。
             * - **5**：表示RDS。
             * @example `2`
             */
            ResourceType: number;
            /**
             * 数据创建时间，单位：毫秒。
             * @example `1625587423000`
             */
            GmtCreate: number;
            /**
             * 数据来源产品类型编码。取值：
             * - **ODPS**
             * - **OSS**
             * - **ADS**
             * - **OTS**
             * - **RDS**
             * @example `OSS`
             */
            ResourceTypeCode: string;
            /**
             * 数据所属用户名。
             * @example `tsts`
             */
            UserName: string;
            /**
             * 数据的唯一标识ID。
             * @example `1`
             */
            Id: number;
        }[];
        /**
         * 授权扫描的OSS对象列表。
         */
        OssBucketList: {
            /**
             * OSS对象所属地域ID。
             * @example `cn-****`
             */
            RegionId: string;
            /**
             * OSS对象所属存储空间名称。
             * @example `oss-bucket`
             */
            BucketName: string;
        }[];
        /**
         * 授权扫描的地域列表。
         */
        RegionList: {
            /**
             * 地域ID。
             * @example `cn-****`
             */
            RegionId: string;
            /**
             * 地域名称。
             * @example `杭州`
             */
            LocalName: string;
        }[];
    };
}
