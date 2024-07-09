export interface DescribeDBClustersWithBackupsRequest {
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
    /**
     * 地域ID。
     * > 可通过接口[DescribeRegions](~~98041~~)查看地域信息详情。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID，支持传入多个集群ID，集群ID之间用英文逗号（,）分隔。
     * @example `pc-**************`
     */
    "DBClusterIds"?: string;
    /**
     * 集群名称，集群名称需满足如下要求：
     * * 不能以`http://`或`https://`开头。
     * * 长度为2~256个字符。
     * @example `test`
     */
    "DBClusterDescription"?: string;
    /**
     * 数据库引擎类型，取值范围如下：
     * * **MySQL**
     * * **PostgreSQL**
     * * **Oracle**
     * @example `MySQL`
     */
    "DBType"?: string;
    /**
     * 集群是否已删除，取值范围如下：
     * * **0**：未删除
     * * **1**：已删除
     * @example `0`
     */
    "IsDeleted"?: number;
    /**
     * 每页记录数，取值范围如下：
     * * **30**
     * * **50**
     * * **100**
     * 默认值为30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值范围为大于0但不超过Integer最大值的整数，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 数据库引擎版本号。
     * * MySQL版本号取值范围如下：
     *     * **5.6**
     *     * **5.7**
     *     * **8.0**
     * * PostgreSQL版本号取值范围如下：
     *     * **11**
     *     * **14**
     * * Oracle版本号取值范围如下：
     *     * **11**
     *     * **14**
     * @example `8.0`
     */
    "DBVersion"?: string;
}
