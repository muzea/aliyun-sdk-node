export interface ListOrganizationMembersRequest {
    /**
     * 企业标识，也称企业id
     * @example `66c0c9fffeb86b450c199fcd`
     */
    "organizationId": string;
    /**
     * 企业成员名
     * @example `名字1`
     */
    "organizationMemberName"?: string;
    /**
     * 第三方系统（若是钉钉同步，则是 Dingtalk）， 与externUid参数成对使用，只传其中一个，不生效。
     * @example `Dingtalk`
     */
    "provider"?: string;
    /**
     * 第三方系统的用户 id：若是钉钉同步，则是钉钉的员工 User ID；与provider参数成对使用，只传其中一个，不生效。
     * @example `1236666`
     */
    "externUid"?: string;
    /**
     * 选项：正常（normal），已停用（blocked），已删除（deleted），只能指定一种；若不指定，默认返回正常（normal）状态的成员。
     * @example `normal`
     */
    "state"?: string;
    /**
     * 分页中的起始序列，值为上一页请求返回的nextToken值。
     * @example `""`
     */
    "nextToken"?: string;
    /**
     * 最大返回数量，0-50，默认值20
     * @example `20`
     */
    "maxResults"?: number;
    /**
     * 加入云效企业时间，单位为毫秒时间戳
     * @example `1631845101798`
     */
    "joinTimeFrom"?: number;
    /**
     * 加入云效企业时间，单位为毫秒时间戳
     * @example `1631845101798`
     */
    "joinTimeTo"?: number;
    /**
     * 返回信息中是否包含第三方信息，默认不包含。
     */
    "containsExternInfo"?: boolean;
}
