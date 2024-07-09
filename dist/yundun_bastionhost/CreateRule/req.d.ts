export interface CreateRuleRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-5yd2ymfsa0e`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 授权规则名称。最大128字符。
     * @example `rule`
     */
    "RuleName": string;
    /**
     * 授权规则备注。最大500字符。
     * @example `comment`
     */
    "Comment"?: string;
    /**
     * 授权规则有效期开始时间（秒，时间戳格式）
     * @example `1669630029`
     */
    "EffectiveStartTime"?: number;
    /**
     * 授权规则有效期结束时间（秒，时间戳格式）
     * @example `1672502400`
     */
    "EffectiveEndTime"?: number;
    /**
     * 用户ID数组。
     */
    "UserIds"?: string[];
    /**
     * 用户组ID数组。
     */
    "UserGroupIds"?: string[];
    /**
     * 主机信息。
     */
    "Hosts"?: {
        /**
         * 主机ID。
         * @example `1`
         */
        HostId: string;
        /**
         * 主机账户ID数组。
         */
        HostAccountIds: string[];
    }[];
    /**
     * 数据库信息。
     */
    "Databases"?: {
        /**
         * 数据库实例ID。
         * @example `2`
         */
        DatabaseId: string;
        /**
         * 数据库账户ID数组。
         */
        DatabaseAccountIds: string[];
    }[];
    /**
     * 要授权的资产组信息。
     */
    "HostGroups"?: {
        /**
         * 资产组ID。
         * @example `3`
         */
        HostGroupId: string;
        /**
         * 资产账户名数组。
         */
        HostAccountNames: string[];
    }[];
}
