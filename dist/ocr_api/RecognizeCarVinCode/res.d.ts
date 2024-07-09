export interface RecognizeCarVinCodeResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data":{"vin码":"LSVNP41Z7B2731969"},"ftype":0,"height":157,"orgHeight":157,"orgWidth":552,"prism_keyValueInfo":[{"key":"vin码","keyProb":100,"value":"LSVNP41Z7B2731969","valuePos":[{"x":31,"y":54},{"x":31,"y":32},{"x":319,"y":38},{"x":318,"y":60}],"valueProb":100}],"sliceRect":{"x0":94,"y0":35,"x1":447,"y1":35,"x2":446,"y2":99,"x3":92,"y3":100},"width":552}`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 详细信息
     * @example `message`
     */
    Message: string;
}
