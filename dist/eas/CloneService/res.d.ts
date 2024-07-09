export interface CloneServiceResponse {
    /**
     * Id of the request
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 服务Id。
     * @example `eas-m-r9knx7n9guf2p*****`
     */
    ServiceId: string;
    /**
     * 服务名。
     * @example `foo`
     */
    ServiceName: string;
    /**
     * 服务状态。
     * @example `Creating`
     */
    Status: string;
    /**
     * 公网访问地址。
     * @example `http://10123*****.cn-shanghai.aliyuncs.com/api/predict/echo`
     */
    InternetEndpoint: string;
    /**
     * 快速访问地址。
     * @example `http://10123*****.vpc.cn-shanghai.aliyuncs.com/api/predict/echo`
     */
    IntranetEndpoint: string;
}
