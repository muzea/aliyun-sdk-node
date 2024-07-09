export interface ModifyRuleRequest {
    /**
     * 要修改的授权规则所在堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-zmb2y9ydw08`
     */
    "InstanceId": string;
    /**
     * 要修改授权规则所在的堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要修改的授权规则ID。
     * @example `68`
     */
    "RuleId": string;
    /**
     * 修改后的授权规则名称。长度为1~128个字符，不能以特殊字符开头，只可包含特殊字符中的半角句号（）、下划线（_）、短划线（-）、半角单引号（'）以及空格。
     * @example `test`
     */
    "RuleName"?: string;
    /**
     * 指定修改后授权规则的备注信息，最多支持500字符。
     * @example `测试`
     */
    "Comment"?: string;
    /**
     * 修改后授权规则有效期开始时间（秒，时间戳格式）。
     * @example `1669630029`
     */
    "EffectiveStartTime"?: number;
    /**
     * 修改后授权规则有效期结束时间（秒，时间戳格式）。
     * @example `1672502400`
     */
    "EffectiveEndTime"?: number;
    /**
     * 修改后授权规则关联的用户ID列表。
     */
    "UserIds"?: string[];
    /**
     * 修改后授权规则关联的用户组ID列表。
     */
    "UserGroupIds"?: string[];
    /**
     * 修改后授权规则关联的主机ID与主机账户ID数组。
     */
    "Hosts"?: {
        /**
         * 主机ID。
         * @example `1`
         */
        HostId: string;
        /**
         * 主机账户ID列表。
         */
        HostAccountIds: string[];
    }[];
    /**
     * 修改后授权的数据库实例和数据库账户列表。
     */
    "Databases"?: {
        /**
         * 数据库实例ID。
         * @example `2`
         */
        DatabaseId: string;
        /**
         * 数据库账户ID列表。
         */
        DatabaseAccountIds: string[];
    }[];
    /**
     * 修改后授权的资产组和账户列表。
     */
    "HostGroups"?: {
        /**
         * 资产组ID。
         * @example `1
        `
         */
        HostGroupId: string;
        /**
         * 资产账户名列表。
         */
        HostAccountNames: string[];
    }[];
}
