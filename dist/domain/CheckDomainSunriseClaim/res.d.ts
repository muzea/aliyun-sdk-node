export interface CheckDomainSunriseClaimResponse {
    /**
     * TMDB库提供的商标词key。
     * @example `2017092100/8/2/1/kDfu9htHGEx_y-LJ3XSlKMZ70000020001`
     */
    ClaimKey: string;
    /**
     * 唯一请求识别码。
     * @example `BA7A4FD4-EB9A-4A20-BB0C-9AEB15634DC1`
     */
    RequestId: string;
    /**
     * 结果。取值：
     * - **0**：不是商标词或不处于claim域名生命周期。
     * - **1**：sunrise域名生命周期。
     * - **2**：claim域名生命周期。
     *
     * @example `1`
     */
    Result: number;
}
