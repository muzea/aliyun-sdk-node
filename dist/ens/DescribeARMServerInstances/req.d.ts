export interface DescribeARMServerInstancesRequest {
    /**
     * 服务器实例ID列表。
     */
    "ServerIds"?: string[];
    /**
     * ENS节点ID列表。
     */
    "EnsRegionIds"?: string[];
    /**
     * 查询列表的页码。起始值为**1**。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值为**100**行。
     * 默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询起始时间，格式"2006-01-02"；默认无时间限制。
     * @example `2006-01-02`
     */
    "MinDate"?: string;
    /**
     * 查询终止时间，格式"2006-01-02"；默认无时间限制。
     * @example `2006-01-03`
     */
    "MaxDate"?: string;
    /**
     * 操作状态列表。
     */
    "States"?: string[];
    /**
     * 容器规格列表。
     */
    "AICSpecs"?: string[];
    /**
     * 服务器规格列表。
     */
    "ServerSpecs"?: string[];
    /**
     * 服务器名称。
     * @example `Server-Name`
     */
    "Name"?: string;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 查询结果排序方式，可设置按照ServerIdSort（服务器ID）、ServerNameSort（服务器名称）、ExpireTimeSort（到期时间）、CreationTimeSort（创建时间）、EnsRegionIdSort（节点ID）中的一个或者多个结果排序。
     * 取值含义：asc：升序， desc：降序。
     * @example `{"ServerIdSort":"desc","ServerNameSort":"desc","ExpireTimeSort":"asc"}`
     */
    "OrderByParams"?: string;
    /**
     * 查询结果是否包含容器信息，取值：
     * - **true**：包含。
     * - **false**：不包含。
     * @example `true`
     */
    "DescribeAICInstances"?: boolean;
}
