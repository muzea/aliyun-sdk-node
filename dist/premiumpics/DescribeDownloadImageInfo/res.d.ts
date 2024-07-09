export interface DescribeDownloadImageInfoResponse {
    /**
     * 授权书下载地址。
     * @example `http`
     */
    AuthorizationUrl: string;
    /**
     * 请求id
     * @example `047CE3B4-32EE-5AB9-89C8-BCEC23A5B4F4`
     */
    RequestId: string;
    /**
     * errorMsg
     * @example `Success. Request Success.`
     */
    ErrorMsg: string;
    /**
     * 下载地址。
     * @example `dsw-registry-vpc.cn-shenzhen.cr.aliyuncs.com/cloud-dsw-user/users:u1135620889978899-8589-20220922110432`
     */
    ImageUrl: string;
    /**
     * 错误码。
     * @example `sae.errorcode.ServiceDisabled.message`
     */
    ErrorCode: string;
    /**
     * 是否调用成功。取值：true：调用成功。                                 false：调用失败。
     * @example `True`
     */
    Success: boolean;
}
