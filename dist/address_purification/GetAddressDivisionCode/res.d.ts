export interface GetAddressDivisionCodeResponse {
    /**
     * RequestId
     * @example `F726DC5F-67A1-4FBF-B216-758D1A681B8A`
     */
    RequestId: string;
    /**
     * json格式数据
     * @example `{"division_info":{"divcode":"330100000000","division_name":"浙江省 杭州市"},"time_used":{"rt":{"division_info":"0.005276203155517578","complete":"0.022394180297851562","structure":"0.006552696228027344"},"start":"1589800407.0037742"},"status":"OK"}`
     */
    Data: string;
}
