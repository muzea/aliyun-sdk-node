export interface CreateSchemeConfigResponse {
    /**
     * 请求ID。
     * @example `B95B36EC-8108-4479-D3AA-2BB27F9B155A
    `
     */
    RequestId: string;
    /**
     * 状态码的描述。
     * @example `成功`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Model: {
        /**
         * 方案Code
         * @example `FA100000168468035`
         */
        SchemeCode: string;
    };
    /**
     * 状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[API返回码](https://help.aliyun.com/zh/pnvs/developer-reference/api-return-code?spm=a2c4g.11186623.0.0.5c3a662fbgeAuk)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求是否成功。
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `false`
     */
    Success: boolean;
}
