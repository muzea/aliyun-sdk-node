export interface ListSchemasRequest {
    /**
     * odps, swift, saro, oss, unKnow
     * @example `odps`
     */
    "type": string;
    /**
     * odps endpoint
     * @example `http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api`
     */
    "endpoint"?: string;
    /**
     * odps数据源ak
     * @example `L***p`
     */
    "accessKey"?: string;
    /**
     * odps数据源as
     * @example `5**9a6`
     */
    "accessSecret"?: string;
    /**
     * odps数据源项目名称
     * @example `sec_odps`
     */
    "project"?: string;
    /**
     * 数据分片
     * @example `dt=20230520`
     */
    "partition"?: string;
    /**
     * saro、odps数据源表名
     * @example `item`
     */
    "table"?: string;
    /**
     * saro数据源的namespace
     * @example `imm`
     */
    "namespace"?: string;
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
}
