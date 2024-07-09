export interface UpdateXpackMonitorConfigRequest {
    /**
     * Logstash实例ID。
     * @example `ls-cn-oew1qbgl****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "ClientToken"?: string;
    /**
     * X-Pack监控的配置信息。
     */
    "body"?: {
        /**
         * 是否开启X-Pack监控：
         * - true：开启
         * - false：不开启
         * @example `true`
         */
        enable: boolean;
        /**
         * Elasticsearch实例的访问地址。
         */
        endpoints: string[];
        /**
         * Elasticsearch实例的用户名。
         * @example `elastic`
         */
        userName: string;
        /**
         * Elasticsearch实例的密码。
         * @example `******`
         */
        password: string;
    };
}
