export interface CreateAppServiceResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 服务ID。
     * @example `eas-m-aaxxxddf`
     */
    ServiceId: string;
    /**
     * 服务名字。
     * @example `foo`
     */
    ServiceName: string;
    /**
     * 服务的状态。
     * @example `Creating`
     */
    Status: string;
    /**
     * 服务所在的区域。
     * @example `cn-shanghai`
     */
    Region: string;
    /**
     * 服务的公网Endpoint。
     * @example `http://pai-eas.cn-shanghai.****`
     */
    InternetEndpoint: string;
    /**
     * 服务内网Endpoint。
     * @example `http://pai-eas-vpc.cn-shanghai.****`
     */
    IntranetEndpoint: string;
}
