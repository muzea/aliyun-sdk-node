export interface DescribeAccountKmsStatusResponse {
    /**
     * 当前阿里云账号的密钥管理服务状态，取值：
     *  - Enabled：已开通，可正常使用。
     *  - NotEnabled：未开通。
     *  - InDebt：已欠费，即将停止服务。
     *    > 当您的阿里云账号欠费后，请及时续费，以免对您的业务造成影响。
     *  - Suspended：已停止服务。
     * @example `Enabled`
     */
    AccountStatus: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3ac84333-d64d-4784-a8bc-997834a7ac6c`
     */
    RequestId: string;
}
