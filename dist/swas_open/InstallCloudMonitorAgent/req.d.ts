export interface InstallCloudMonitorAgentRequest {
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 轻量应用服务器实例ID。
     * @example `9ae7106e68eb4402b0dcbd48a9de****`
     */
    "InstanceId": string;
    /**
     * 是否强制安装云监控插件。取值：
     * - true（默认值）：强制安装。
     * - false：不强制安装。
     * @example `true`
     */
    "Force"?: boolean;
}
