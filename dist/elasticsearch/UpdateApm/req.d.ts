export interface UpdateApmRequest {
    /**
     * APM Server实例的ID。
     * @example `apm-cn-i7m2fuae****`
     */
    "instanceId": string;
    /**
     * 修改信息。
     */
    "body"?: {
        /**
         * 关联的Elasticsearch实例ID。
         * @example `es-cn-i7m2fsfhc001x****`
         */
        outputES: string;
        /**
         * 关联的Elasticsearch实例的用户名。
         * @example `elastic`
         */
        outputESUserName: string;
        /**
         * 关联的Elasticsearch实例的登录密码。
         * @example `ESPassword****`
         */
        outputESPassword: string;
        /**
         * APM Server实例的登录密码。
         * @example `AMPPassword****`
         */
        token: string;
        /**
         * APM Server实例的名称。
         * @example `APMtest`
         */
        description: string;
    };
}
