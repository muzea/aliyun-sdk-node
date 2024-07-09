export interface ConfirmRelationRequest {
    /**
     * 关系类型，目前仅支持enterprise_group
     * @example `关系类型`
     */
    "RelationType"?: string;
    /**
     * 主账号阿里云UID
     * @example `1738376485192612`
     */
    "ParentUserId"?: number;
    /**
     * 确认动作：
     * - 子账号同意：child_agree
     * - 子账号拒绝：child_disagree
     * - 主账号取消确认：主账号取消确认
     * @example `child_agree`
     */
    "ConfirmCode": string;
    /**
     * 子账号阿里云UID
     * @example `1512996702208737`
     */
    "ChildUserId"?: number;
    /**
     * 调用请求唯一标识
     * @example `request_id`
     */
    "RequestId": string;
    /**
     * 授予子账号的权限数据，权限点如下：
     * - 允许同步信控身份给关联账号：SYNCHRONIZE_FINANCE_IDENTITY
     * - 允许同步优惠给关联账号：SYNCHRONIZE_FINANCE_DISCOUNT_POLICY_TO_TARGET
     * - 禁止关联账户余额提现：FORBID_WITHDRAW_CASH
     * - 禁止关联账户管理发票：FORBID_MANAGE_INVOICE
     * - 请求查看财务关联信息：CHECK_FINANCE_INFO
     * - 允许管理目标发票：MANAGE_TARGET_INVOICE
     * - 允许查看关联账户消费信息：CHECK_TARGET_CONSUMPTION
     * @example `SYNCHRONIZE_FINANCE_IDENTITY`
     */
    "PermissionCodes": string[];
    /**
     * 关系ID。取值从QueryRelationList接口返回的结果字段relationId获取。
     * @example `51463`
     */
    "RelationId"?: number;
}
