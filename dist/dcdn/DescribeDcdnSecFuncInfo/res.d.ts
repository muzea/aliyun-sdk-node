export interface DescribeDcdnSecFuncInfoResponse {
    /**
     * 请求ID。
     * @example `30A3A25A-86B3-4C1D-BAA8-12B8607A5CFD`
     */
    RequestId: string;
    /**
     * HTTP请响应说明描述。
     * @example `OK`
     */
    Description: string;
    /**
     * HTTP请响应返回码。
     * - 0：OK。
     * - 非0：返回错误。
     * @example `0`
     */
    RetCode: string;
    /**
     * HTTP响应状态码。
     * @example `200`
     */
    HttpStatus: string;
    /**
     * 代码所需要的参数。
     */
    Content: {
        /**
         * 根据语言设置显示中文或英文。
         * @example `ai_defense`
         */
        Label: string;
        /**
         * 下拉列表取值项。
         * @example `ai_defense`
         */
        Value: string;
    }[];
}
