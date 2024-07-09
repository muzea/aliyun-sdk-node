export interface CorrectAddressResponse {
    /**
     * RequestId
     * @example `226BD68D-6208-4140-A6EC-2F2BF434B601`
     */
    RequestId: string;
    /**
     * json格式数据
     * @example `{"address_correct":["文一西路=road 969号=roadno"]}`
     */
    Data: string;
}
