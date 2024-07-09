export interface DescribeDBInstancePromoteActivityRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5******`
     */
    "DbInstanceName": string;
    /**
     * 当前阿里云主账号的ID。
     * @example `22973492**********`
     */
    "AliUid": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
