export interface ModifyAccountRelationRequest {
    /**
     * 关系类型，目前仅支持enterprise_group
     * @example `enterprise_group`
     */
    "RelationType"?: string;
    /**
     * 修改动作
     * - 添加：ADD
     * - 删除：DELETE
     * @example `ADD`
     */
    "RelationOperation": string;
    /**
     * 主账号的阿里云UID
     * @example `1738376485192612`
     */
    "ParentUserId"?: number;
    /**
     * 显示名称，用于页面显示，便于明确账号使用场景
     * @example `用户昵称`
     */
    "ChildNick"?: string;
    /**
     * 子账号的阿里云账号UID
     * @example `1512996702208737`
     */
    "ChildUserId"?: number;
    /**
     * 请求唯一标识，用于标记一次请求，便于定位问题
     * @example `request_id`
     */
    "RequestId": string;
    /**
     * 暂时不支持角色修改
     * @example `trusteeship`
     */
    "RoleCodes"?: string[];
    /**
     * 支持修改的权限点如下：
     * - 允许同步信控身份给关联账号：SYNCHRONIZE\_FINANCE\_IDENTITY
     * - 允许同步优惠给关联账号：SYNCHRONIZE\_FINANCE\_DISCOUNT\_POLICY\_TO\_TARGET
     * - 禁止关联账户余额提现：FORBID\_WITHDRAW\_CASH
     * - 禁止关联账户管理发票：FORBID\_MANAGE\_INVOICE
     * - 请求查看财务关联信息：CHECK\_FINANCE\_INFO
     * - 允许管理目标发票：MANAGE\_TARGET\_INVOICE
     * - 允许查看关联账户消费信息：CHECK\_TARGET\_CONSUMPTION
     * @example `SYNCHRONIZE_FINANCE_IDENTITY`
     */
    "PermissionCodes"?: string[];
    /**
     * 关系ID。取值从QueryRelationList接口返回的结果字段relationId获取。
     * @example `51463`
     */
    "RelationId"?: number;
}
