export interface GetTemplateCategoriesResponse {
    /**
     * allowRetry
     * @example `False`
     */
    AllowRetry: boolean;
    /**
     * errorMsg
     * @example `{&quot;ErrMsg&quot;:&quot;Right angle correction failed!&quot;,&quot;ErrCode&quot;:&quot;5002&quot;}`
     */
    ErrorMsg: string;
    /**
     * errorCode
     * @example `200`
     */
    ErrorCode: string;
    /**
     * module
     */
    Module: any;
    /**
     * success
     * @example `True`
     */
    Success: boolean;
    /**
     * appName
     * @example `ronghe`
     */
    AppName: string;
    /**
     * requestId
     * @example `AF0F836D-5E0C-5701-BD55-3DA4C4F29021`
     */
    RequestId: string;
}
