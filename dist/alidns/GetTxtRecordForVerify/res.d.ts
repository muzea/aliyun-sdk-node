export interface GetTxtRecordForVerifyResponse {
    /**
     * 主机记录。
     * @example `aliyunRetrieval`
     */
    RR: string;
    /**
     * 唯一请求识别码。
     * @example `9CC0D642-49D4-48DE-A1A5-9F218652E4A7`
     */
    RequestId: string;
    /**
     * 域名名称。
     * > 若传入为空，则不返回该字段。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 记录值。
     * > 有效期为三天。
     * @example `c99419e6997f41daaa3e*****`
     */
    Value: string;
}
