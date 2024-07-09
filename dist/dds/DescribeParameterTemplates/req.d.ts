export interface DescribeParameterTemplatesRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据库引擎，取值：**mongodb**。
     * @example `mongodb`
     */
    "Engine": string;
    /**
     * 数据库版本号。取值如下：
     * - **7.0**
     * - **6.0**
     * - **5.0**
     * - **4.4**
     * - **4.2**
     * - **4.0**
     * - **3.4**
     * @example `5.0`
     */
    "EngineVersion": string;
    /**
     * 实例的角色类型，取值说明：
     * - db：分片集群shard角色。
     * - cs：分片集群config server角色。
     * - mongos：分片集群mongos角色。
     * - normal: 副本集角色。
     * - physical：单节点角色。
     * 默认值为normal。
     * @example `normal`
     */
    "Role"?: string;
}
