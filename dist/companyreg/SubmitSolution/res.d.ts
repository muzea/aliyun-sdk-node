export interface SubmitSolutionResponse {
    /**
     * 方案ID
     * @example `S20211109140729000001`
     */
    SolutionBizId: string;
    /**
     * 请求id
     * @example `0A3CFCF5-E0C0-5C0B-A2ED-03827F16D85F`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 错误code
     * @example `NoPermission`
     */
    ErrorCode: string;
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMsg: string;
    /**
     * 确认链接
     * @example `https://companyreg.console.aliyun.com/#/intention-notarize?Type=119&bizid=I20220114181457000001`
     */
    ConfirmUrl: string;
}
