export interface ExtractPhoneResponse {
    /**
     * RequestId
     * @example `A602539D-A298-4643-A268-94F0B893C12F`
     */
    RequestId: string;
    /**
     * json格式数据
     * @example `{"phone_extract":[{"start":8,"end":19,"type":"TEL","word":"1333333****"}],"time_used":{"rt":{"phone_extract":"0.014524221420288086"},"start":"1589800189.9369104"},"status":"OK"}`
     */
    Data: string;
}
