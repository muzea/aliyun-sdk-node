export interface GetIntegrationStateRequest {
    /**
     * 阿里云容器服务Kubernetes版的Kubernetes集群的ID。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * ARMS支持的软件缩写。可选值（不区分大小写）：`ASM`、`IoT`和`Flink`。
     * @example `asm`
     */
    "Integration": string;
}
