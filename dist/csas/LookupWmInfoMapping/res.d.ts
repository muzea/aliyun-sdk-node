export interface LookupWmInfoMappingResponse {
    /**
     * 本次请求的ID。
     * @example `7E9D7ACD-53D5-56EF-A913-79D148D06299`
     */
    RequestId: string;
    /**
     * 映射关系查询结果。
     */
    Data: {
        /**
         * 根据映射关系查询得到的字符串格式的水印信息。取值来源：
         * - [CreateWmInfoMapping](~~CreateWmInfoMapping~~)：创建水印信息映射关系接口的**WmInfoBytesB64**参数。
         * @example `aGVsbG8gc2F*****
        `
         */
        WmInfoBytesB64: string;
    };
}
