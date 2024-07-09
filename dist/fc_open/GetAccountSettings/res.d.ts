export interface GetAccountSettingsResponse {
    /**
     * 可用区列表。
     */
    availableAZs: string[];
    /**
     * 默认服务角色。
     * @example `acs:ram::1234:role/aliyunfcdefaultrole`
     */
    defaultRole: string;
}
