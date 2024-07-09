export interface SetPolicyAssetScopeRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要修改的控制策略的ID。
     * > 您可以调用[ListPolicies](~~2758876~~)接口获取该参数。
     * @example `7`
     */
    "PolicyId": string;
    /**
     * 控制策略生效的资产范围。取值：
     * - **All**：针对所有资产生效
     * - **Host**：针对已选择的主机生效
     * - **Database**：针对已选择的数据库生效
     * - **HostGroup**：针对已选择的资产组生效
     * @example `All`
     */
    "ScopeType": string;
    /**
     * 控制策略生效的主机范围。
     * > 当ScopeType为 Host 时必填。最多500 个。
     */
    "Hosts"?: {
        /**
         * 主机ID。
         * @example `1`
         */
        HostId: string;
        /**
         * 控制策略生效的主机账户范围。取值：
         * - **All**：针对主机中的所有账户生效
         * - **AccountId**：针对主机中指定的账户生效
         * @example `All`
         */
        AccountScopeType: string;
        /**
         * 控制策略生效的主机账户范围。
         * > 当AccountScopeType为 AccountId 时必填
         */
        HostAccountIds: string[];
    }[];
    /**
     * 控制策略生效的数据库资产范围。
     * > 当ScopeType为  Database 时必填。最多500 个。
     */
    "Databases"?: {
        /**
         * 数据库实例ID。
         * @example `3`
         */
        DatabaseId: string;
        /**
         * 控制策略生效的数据库账户范围。取值：
         * - **All**：针对数据库中的所有账户生效
         * - **AccountId**：针对数据库中指定的账户生效
         * @example `AccountId`
         */
        AccountScopeType: string;
        /**
         * 控制策略生效的数据库账户范围。
         * > 当AccountScopeType为 AccountId 时必填
         */
        DatabaseAccountIds: string[];
    }[];
    /**
     * 控制策略生效的资产组范围。
     * > 当ScopeType为  HostGroup 时必填。最多100 个。
     */
    "HostGroups"?: {
        /**
         * 资产组ID。
         * @example `86`
         */
        HostGroupId: string;
        /**
         * 控制策略生效的资产账户范围。取值：
         * - **All**：针对资产组中的所有账户生效
         * - **AccountName**：针对资产组中指定的账户生效
         * @example `All`
         */
        AccountScopeType: string;
        /**
         * 控制策略生效的资产账户范围。
         * > 当AccountScopeType为 AccountNames 时必填
         */
        AccountNames: string[];
    }[];
}
