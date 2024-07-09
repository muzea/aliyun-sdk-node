export interface StopConfigurationRecorderResponse {
    /**
     * 请求ID。
     * @example `AB2E892E-8A43-5B0F-8FE3-B53ADA53CB2D`
     */
    RequestId: string;
    /**
     * 关闭配置审计服务的结果。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    StopConfigurationRecorderResult: boolean;
}
