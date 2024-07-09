export interface QueryConfigurationOrderResponse {
    /**
     * requestId
     * @example `1991B495-FB2A-5693-A79F-37245D48E293`
     */
    RequestId: string;
    /**
     * errorMsg
     * @example `Not Found`
     */
    ErrorMsg: string;
    /**
     * module
     * @example `[]`
     */
    Data: string;
    /**
     * success
     * @example `True`
     */
    Success: boolean;
}
