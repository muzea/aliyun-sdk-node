export interface AssociatePrincipalWithPortfolioRequest {
    /**
     * 产品组合ID。
     * @example `port-bp1yt7582g****`
     */
    "PortfolioId": string;
    /**
     * RAM实体类型。取值：
     * - RamUser：RAM用户。
     * - RamRole：RAM角色。
     * @example `RamUser`
     */
    "PrincipalType": string;
    /**
     * RAM实体ID。
     * 获取RAM用户ID的方法，请参见[GetUser](~~28681~~)。
     * 获取RAM角色ID的方法，请参见[GetRole](~~28711~~)。
     * @example `24477111603637****`
     */
    "PrincipalId": string;
}
