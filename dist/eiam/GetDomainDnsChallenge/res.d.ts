export interface GetDomainDnsChallengeResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * DNS Challenge记录。
     */
    DomainDnsChallenge: {
        /**
         * DNS challenge名称。
         * @example `_idaas-challenge.login.example.com`
         */
        DnsChallengeName: string;
        /**
         * DNS记录类型。
         * @example `枚举，目前只支持TXT类型`
         */
        DnsType: string;
        /**
         * DNS challenge值。
         * @example `yriov8FD/rIGjQTU3/JjqkwxRbo5dyGftHWOtP5xfCI=`
         */
        DnsChallengeValue: string;
    };
}
