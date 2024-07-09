export interface CheckVpnBgpEnabledResponse {
    /**
     * 请求ID。
     * @example `DF448D2E-215D-334F-B10D-7C3B087EF996`
     */
    RequestId: string;
    /**
     * 当前地域是否支持BGP功能。
     * - **true**：支持。
     * - **false**：不支持。
     * @example `true`
     */
    BgpEnabled: boolean;
}
