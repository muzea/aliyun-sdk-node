export interface ListPrincipalsResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
    /**
     * RAM实体列表。
     */
    Principals: {
        /**
         * RAM实体类型。取值：
         * - RamUser：RAM用户。
         * - RamRole：RAM角色。
         * @example `RamUser`
         */
        PrincipalType: string;
        /**
         * RAM实体ID。
         * @example `24477111603637****`
         */
        PrincipalId: string;
    }[];
}
