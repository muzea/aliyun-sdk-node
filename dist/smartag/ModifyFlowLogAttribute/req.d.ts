export interface ModifyFlowLogAttributeRequest {
    /**
     * 流日志的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 流日志实例描述。
     * @example `流日志实例1`
     */
    "Description"?: string;
    /**
     * 流日志实例名称。
     * @example `DDE`
     */
    "Name"?: string;
    /**
     * 活跃流输出间隔，默认值为**300**s。
     * @example `300`
     */
    "ActiveAging"?: number;
    /**
     * 非活跃流输出间隔，默认为**15**s。
     * @example `15`
     */
    "InactiveAging"?: number;
    /**
     * 流日志输出类型：
     * - **sls**：流日志存储在阿里云日志服务。
     * - **netflow**：流日志存储在您配置的netflow服务器。
     * - **all**：流日志同时存储在阿里云日志服务和您配置的netflow服务器。
     * @example `sls`
     */
    "OutputType"?: string;
    /**
     * 日志服务的地域ID，输出类型为**sls**时填入。
     * @example `cn-shanghai`
     */
    "SlsRegionId"?: string;
    /**
     * 日志服务的Project，输出类型为**sls**时填入。
     * @example `ddrrgt`
     */
    "ProjectName"?: string;
    /**
     * 日志服务的日志库，输出类型为**sls**时填入。
     * @example `ssfghgh`
     */
    "LogstoreName"?: string;
    /**
     * 流日志输出的服务器地址，输出类型为**netflow**时填入。
     * @example `192.168.0.2`
     */
    "NetflowServerIp"?: string;
    /**
     * 流日志输出的服务器端口，默认值为**9995**，输出类型为**netflow**时填入。
     * @example `9995`
     */
    "NetflowServerPort"?: number;
    /**
     * 流日志输出时使用的netflow协议版本号，可选**V5**、**V9**和**V10**，默认值**V9**，输出类型为**netflow**时填入。
     * @example `V9`
     */
    "NetflowVersion"?: string;
    /**
     * 流日志实例ID。
     * @example `fl-7a56mar1kfw9vj****`
     */
    "FlowLogId": string;
}
