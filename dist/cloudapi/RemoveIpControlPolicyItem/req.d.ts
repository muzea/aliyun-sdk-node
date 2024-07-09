export interface RemoveIpControlPolicyItemRequest {
    /**
     * IP访问控制的ID，代表了唯一的IP控制策略
     * @example `7ea91319a34d48a09b5c9c871d9768b1`
     */
    "IpControlId": string;
    /**
     * 具体的策略ID，多个以英文分号（;）分割,最多100个
     * @example `P151533572852362;P151533557750260`
     */
    "PolicyItemIds": string;
}
