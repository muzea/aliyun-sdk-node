export interface DescribeCompanyTemplateVersionsResponse {
    /**
     * 总数。
     * @example `16`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `6248311A-3296-5084-B057-D0EC3DCE5C47`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * POP请求成功与否标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。取值说明如下：请求成功：不返回ErrorCode字段。                                 请求失败：返回ErrorCode字段。具体信息，请参见本文的错误码列表。
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数ErrMessage错误信息中的%s。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 与本次请求相关的动态错误码。
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 分页参数：每页显示条数，默认值10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 版本列表。
     */
    Versions: {
        /**
         * 版本号。
         * @example `1.1.0`
         */
        Version: string;
    }[];
}
