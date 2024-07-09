export interface CreateWmInfoMappingResponse {
    /**
     * 本次请求的ID。
     * @example `7E9D7ACD-53D5-56EF-A913-79D148D06299`
     */
    RequestId: string;
    /**
     * 映射结果。
     */
    Data: {
        /**
         * 映射得到的数字格式的水印信息。后续可以使用该值查找到对应映射的字符串格式的水印信息。
         * @example `123***`
         */
        WmInfoUint: number;
    };
}
