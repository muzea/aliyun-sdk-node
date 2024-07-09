export interface GetCredentialReportRequest {
    /**
     * 当请求的返回结果被截断时，可以使用`NextToken`获取从当前截断位置之后的内容。
     * @example `EXAMPLE`
     */
    "NextToken"?: string;
    /**
     * 返回结果的条数。当返回结果达到`MaxItems`限制被截断时，返回参数`IsTruncated`将等于true。
     * 取值范围：1~3501。默认值：3501。
     * @example `1000`
     */
    "MaxItems"?: string;
}
