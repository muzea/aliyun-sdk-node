export interface RunDBCommandRequest {
    /**
     * 服务空间ID。
     * @example `ach41172-adba-4af1-b2e5-63fc5f56a649`
     */
    "SpaceId": string;
    /**
     * 请求数据库时的命令，格式为 JSON String。
     * 包含两个必须字段：
     * - command: 包含集合操作、索引操作、数据操作命令。
     * 集合操作命令：
     * - collections： 获取集合列表；
     * - createCollection： 创建集合，需要字段 name，待创建集合的名称；
     * 索引操作命令：
     * - listIndexes： 获取索引列表，需要字段 collection；
     * - createIndex： 创建索引，需要字段 collection，field，options；
     * - dropIndex： 删除索引，需要 dropIndex 字段；
     * 数据操作命令：
     * - 支持 find，insertOne，replaceOne等，需要collection字段、options字段，每个命令有不同的 options，具体内容参考开发指南；
     * 例如：
     * - command 参数为 find 时，需要 query 字段
     * - command 参数为 replaceOne 时，需要 filter 和 doc 字段
     * @example `{"command":"findOne","collection":"test_collection","query":{"name":"tome"}}`
     */
    "Body": string;
}
