export interface DeleteInstallCodeRequest {
    /**
     * 安装码。
     * >您可以调用[DescribeInstallCodes](~~DescribeInstallCodes~~)接口获取该参数。
     * @example `1q****`
     */
    "CaptchaCode": string;
}
