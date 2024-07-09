export interface CheckDomainResponse {
    /**
     * 域状态，说明是否验证成功。
     * - 0：可用，已验证通过
     * - 1：不可用，验证未通过
     * - 2：可使用，未做cname，未备案
     * - 3：可使用，未备案
     * - 4：可使用，未做cname
     * @example `1`
     */
    DomainStatus: number;
    /**
     * 请求ID
     * @example `F0B82E83-A1D9-4FE6-97D2-F4B231F80B02`
     */
    RequestId: string;
}
