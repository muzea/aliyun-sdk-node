export interface ModifyTenantUserRolesRequest {
    /**
     * 数据库账号名称。
     * 不能使用某些预留关键字，如 SYS、root 等。
     * @example `pay_test`
     */
    "UserName": string;
    /**
     * 租户 ID。
     * @example `t4pnum****`
     */
    "TenantId": string;
    /**
     * 数据库的账号角色信息。
     * - OceanBase MySQL 模式下, 传入所有的数据库和对应的权限, 如果有未传入的数据库, 则视为撤销在该数据库上的权限, 如果取消所有的数据库权限, 则传入为空, 即 UserRole:[]。
     * - OceanBase Oracle 模式下, 只传入对应需要修改的数据库名、表名，以及相应的权限。
     * @example `- OceanBase MySQL 模式：[{"Database":"oceanbase1","Role":"readwrite"},{"Database":"oceanbase2","Role":"readonly"}]
    - OceanBase Oracle 模式：[{"database":"xxx","table":"xxx","role":"readonly"}]
    并且 modifyType 需要传入相应的值`
     */
    "UserRole": string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 用户权限修改类型。
     * OceanBase MySQL 模式下, 不传入该值；OceanBase Oracle 模式下，传入对应的操作：
     * - 添加：ADD。
     * - 删除：DELETE。
     * - 更新：UPDATE。
     * @example `UPDATE`
     */
    "ModifyType"?: string;
}
