export interface CreateQueryOptimizeTagRequest {
    /**
     * 数据库引擎，取值：
     * - **MySQL**：RDS MySQL
     * - **PolarDBMySQL**：PolarDB MySQL版
     * - **PostgreSQL**：RDS PostgreSQL
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * SQL模板ID，您可以调用[GetQueryOptimizeDataStats](~~405261~~)接口查询SQL模板ID。支持英文逗号（,）分隔传入多个模板ID，进行批量打标。
     * @example `6068ce044e3dc9b903979672fb0b69df,d12515c015fc9f41a0778a9e1de0****`
     */
    "SqlIds": string;
    /**
     * SQL标签。支持英文逗号（,）分隔传入多个值。
     * - **DAS\_IMPORTANT**：重要SQL。
     * - **DAS\_NOT\_IMPORTANT**：不重要SQL。
     * - **USER\_IGNORE**：无需优化。
     * - **DAS\_IN\_PLAN**：排期优化。
     * @example `DAS_IN_PLAN,DAS_NOT_IMPORTANT`
     */
    "Tags": string;
    /**
     * 设置请求参数**Tags**的状态：
     * - **0**：清空请求参数**SqlIds**对应的全部标签，忽略请求参数**Tags**设置。
     * - **1**：设置请求参数**SqlIds**对应的标签为请求参数**Tags**的值。
     * @example `1`
     */
    "Status": number;
    /**
     * 备注。
     * 长度为1~300个字符。
     * @example `离线同步类慢SQL，无需优化。`
     */
    "Comments"?: string;
    /**
     * 实例ID。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "InstanceId": string;
}
