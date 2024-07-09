export interface ListInstancesRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 搜索关键字。
     * @example `test`
     */
    "SearchKey"?: string;
    /**
     * 数据库类型，取值请参见[DbType参数说明](~~198106~~)。
     * @example `MySQL`
     */
    "DbType"?: string;
    /**
     * 环境类型，取值如下：
     * - **product**：生产环境
     * - **dev**：开发环境
     * - **pre**：预发环境
     * - **test**：测试环境
     * - **sit**：SIT环境
     * - **uat**：UAT环境
     * - **pet**：压测环境
     * - **stag**：STAG环境
     * @example `product`
     */
    "EnvType"?: string;
    /**
     * 实例来源，取值如下：
     * - **PUBLIC_OWN**：代表公网自建实例
     * - **RDS**：代表RDS实例
     * - **ECS_OWN**：代表ECS自建实例
     * - **VPC_IDC**：代表VPC IDC自建实例
     * @example `RDS`
     */
    "InstanceSource"?: string;
    /**
     * 实例网络类型，取值如下：
     * - **CLASSIC**：经典网络
     * - **VPC**：VPC网络
     * @example `VPC`
     */
    "NetType"?: string;
    /**
     * 实例状态，取值如下：
     * - **NORMAL**：正常使用
     * - **DISABLE**：禁用
     * @example `NORMAL`
     */
    "InstanceState"?: string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页多少条数据，取值不超过100。
     * @example `50`
     */
    "PageSize"?: number;
}
