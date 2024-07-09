export interface ExtractNameResponse {
    /**
     * RequestId
     * @example `3A9AB010-AC38-4E53-9D25-6B97238C2897`
     */
    RequestId: string;
    /**
     * json格式数据
     * @example `{"person_extract":[{"start":8,"end":11,"type":"PER","word":"张小明"}],"time_used":{"rt":{"person_extract":"0.013421058654785156"},"start":"1589799959.7144244"},"status":"OK"}`
     */
    Data: string;
}
