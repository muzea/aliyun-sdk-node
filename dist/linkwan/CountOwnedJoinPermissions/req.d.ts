export interface CountOwnedJoinPermissionsRequest {
    /**
     * 模糊匹配入网凭证租户的阿里云账号ID。
     * @example `some-user`
     */
    "FuzzyRenterAliyunId"?: string;
    /**
     * 模糊匹配入网凭证使用的JoinEUI。
     * @example `d896e0`
     */
    "FuzzyJoinEui"?: string;
    /**
     * 按照凭证的启停用状态进行过滤。
     * **true**表示启用，**false**表示停用。
     * @example `true`
     */
    "Enabled"?: boolean;
    /**
     * 模糊匹配入网凭证的名称。
     * @example `test`
     */
    "FuzzyJoinPermissionName"?: string;
}
