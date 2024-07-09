export interface CreateFlowLogRequest {
    /**
     * 流日志实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 流日志实例的描述。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 流日志实例的名称。
     * @example `sag-flowlog-1`
     */
    "Name"?: string;
    /**
     * 活跃流输出间隔。取值范围：**60~6000**，单位：秒。默认值为**300**秒。
     * @example `300`
     */
    "ActiveAging"?: number;
    /**
     * 非活跃流输出间隔。取值范围：**10~600**，单位：秒。默认值为**15**秒。
     * @example `15`
     */
    "InactiveAging"?: number;
    /**
     * 流日志输出类型，取值：
     * - **sls**：流日志存储在阿里云日志服务中。
     * - **netflow**：流日志存储在您配置的Netflow服务器上。
     * - **all**：流日志同时存储在阿里云日志服务和您配置的Netflow服务器上。
     * @example `all`
     */
    "OutputType"?: string;
    /**
     * 日志服务的地域ID。
     * 流日志输出类型为**sls**或**all**时需填写该项。
     * @example `cn-shanghai`
     */
    "SlsRegionId"?: string;
    /**
     * 日志服务的Project。
     * 流日志输出类型为**sls**或**all**时需填写该项。
     * @example `sag-flowlog-shanghai`
     */
    "ProjectName"?: string;
    /**
     * 日志服务的Logstore。
     * 流日志输出类型为**sls**或者**all**时需填写该项。
     * @example `config-operation-log`
     */
    "LogstoreName"?: string;
    /**
     * 存储流日志的Netflow服务器地址。
     * 流日志输出类型为**netflow**或**all**时需填写该项。
     * @example `192.168.0.2`
     */
    "NetflowServerIp"?: string;
    /**
     * 存储流日志的Netflow服务器端口，默认值为**9995**。
     * 流日志输出类型为**netflow**或**all**时需填写该项。
     * @example `9995`
     */
    "NetflowServerPort"?: number;
    /**
     * 存储流日志时使用的Netflow协议版本号，取值：**V5**、**V9**和**V10**，默认值为**V9**。
     * 流日志输出类型为**netflow**或**all**时需填写该项。
     * @example `V9`
     */
    "NetflowVersion"?: string;
}
