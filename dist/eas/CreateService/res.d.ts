export interface CreateServiceResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 新创建服务的服务ID。
     * @example `eas-m-aaxxxddf`
     */
    ServiceId: string;
    /**
     * 新创建服务的服务名字。
     * @example `yourname`
     */
    ServiceName: string;
    /**
     * 新服务的当前状态。
     * @example `Creating`
     */
    Status: string;
    /**
     * 新创建服务所属的区域ID。
     * @example `cn-shanghai`
     */
    Region: string;
    /**
     * 新创建服务的公网Endpoint。
     * @example `http://pai-eas.vpc.cn-shanghai.****`
     */
    InternetEndpoint: string;
    /**
     * 新创建服务的内网Endpoint。
     * @example `http://pai-eas.cn-shanghai.****`
     */
    IntranetEndpoint: string;
}
