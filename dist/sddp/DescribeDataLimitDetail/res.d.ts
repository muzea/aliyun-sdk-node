export interface DescribeDataLimitDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `769FB3C1-F4C9-42DF-9B72-7077A8989C13`
     */
    RequestId: string;
    /**
     * 查询到的资产详情。
     */
    DataLimit: {
        /**
         * 资产所属区域。
         * @example `华北1（青岛）`
         */
        LocalName: string;
        /**
         * DSC与DSC连接授权的实例、库或Bucket数据间的连通性测试状态。取值：
         * - **2**：表示连通性测试中。
         * - **3**：表示连通性测试通过。
         * - **4**：表示连通性测试未通过。
         * @example `3`
         */
        CheckStatus: number;
        /**
         * 连接数据库端口的端口号。
         * @example `3306`
         */
        Port: number;
        /**
         * DSC与DSC连接授权的实例、库、Bucket数据间的连通性测试状态名称。取值：
         * - **通过**
         * - **不通过**
         * - **检测中**
         * @example `通过`
         */
        CheckStatusName: string;
        /**
         * 数据资产所属区域ID。
         * @example `cn-qingdao`
         */
        RegionId: string;
        /**
         * 数据资产所属云产品的资产ID和数据库名称。
         * @example `rm-m5eup49p6o274****.RDS_example`
         */
        ParentId: string;
        /**
         * 数据资产所属产品类型。取值：
         * - **1**：MaxCompute
         * - **2**：OSS
         * - **3**：ADS
         * - **4**：OTS
         * - **5**：RDS
         * @example `1`
         */
        ResourceType: number;
        /**
         * DSC连接授权实例、库、Bucket等数据资产的时间。格式：时间戳，单位：毫秒。
         * @example `145600000`
         */
        GmtCreate: number;
        /**
         * 数据资产所属产品名称。取值：
         * - **MaxCompute**
         * - **OSS**
         * - **ADS**
         * - **OTS**
         * - **RDS**
         * @example `RDS`
         */
        ResourceTypeCode: string;
        /**
         * 管理数据资产的用户账号。
         * @example `User01`
         */
        UserName: string;
        /**
         * 数据资产的唯一标识ID。
         * @example `12300`
         */
        Id: number;
    };
}
