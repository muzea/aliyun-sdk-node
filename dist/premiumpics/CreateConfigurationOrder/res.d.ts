export interface CreateConfigurationOrderResponse {
    /**
     * requestId
     * @example `B4736F94-D0E5-5D26-A5C4-1988CA68AFC9`
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
    Data: number;
    /**
     * success
     * @example `True`
     */
    Success: boolean;
}
