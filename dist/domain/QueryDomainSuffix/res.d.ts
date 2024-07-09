export interface QueryDomainSuffixResponse {
    /**
     * 唯一请求识别码。
     * @example `D1C9DE44-1D7F-4F66-9653-00000`
     */
    RequestId: string;
    SuffixList: {
        Suffix: string[];
    };
}
