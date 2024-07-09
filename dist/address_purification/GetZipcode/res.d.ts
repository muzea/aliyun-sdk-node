export interface GetZipcodeResponse {
    /**
     * RequestId
     * @example `D0078DC6-8A1F-41A0-9A5F-A6B6443E9A65`
     */
    RequestId: string;
    /**
     * json格式数据
     * @example `{"zipcode":"311500","time_used":{"rt":{"zipcode":"0.004756927490234375","complete":"0.020321130752563477","structure":"0.007731199264526367"},"start":"1589800854.316437"},"status":"OK"}`
     */
    Data: string;
}
