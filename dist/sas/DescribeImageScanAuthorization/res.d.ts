export interface DescribeImageScanAuthorizationResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `340D7FC4-D575-1661-8ACD-CFA7BE57****`
     */
    RequestId: string;
    /**
     * 镜像扫描授权状态。
     */
    AuthStatus: {
        /**
         * 授权状态。取值：
         * -**true**：授权成功
         * -**false**：授权失败
         * @example `true`
         */
        Status: boolean;
    };
}
