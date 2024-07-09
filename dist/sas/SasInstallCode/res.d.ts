export interface SasInstallCodeResponse {
    /**
     * 为服务器手动安装Agent客户端时，客户端的安装验证码。
     * @example `eD****`
     */
    data: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B256A525-7E42-4BB9-A27C-9017FDDF****`
     */
    RequestId: string;
}
