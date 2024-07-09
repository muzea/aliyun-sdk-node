export interface GetManagerInfoByAuthCodeResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 租户无影账号ID。
     * @example `12345678901234****`
     */
    WaId: number;
    /**
     * 组织ID。
     * @example `12345678901234****`
     */
    OrgId: string;
    /**
     * 租户名称。
     * @example `zhangsan`
     */
    UserName: string;
    /**
     * 手机号。
     * @example `1301234****`
     */
    Phone: string;
    /**
     * 团队名称。
     * @example `devteam`
     */
    TeamName: string;
}
