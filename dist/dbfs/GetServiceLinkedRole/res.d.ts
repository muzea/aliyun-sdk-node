export interface GetServiceLinkedRoleResponse {
    /**
     * 主账号ID。
     * @example `1352345930******`
     */
    AccountId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 是否已创建服务关联角色。
     * - true: 已创建
     * - false: 未创建
     * @example `true`
     */
    DbfsLinkedRole: boolean;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
}
