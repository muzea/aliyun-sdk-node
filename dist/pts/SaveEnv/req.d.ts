export interface SaveEnvRequest {
    /**
     * 环境。
     */
    "Env": {
        /**
         * 环境ID。若不填，表示新建环境；若填写，表示修改该环境。
         * @example `10YPA8H`
         */
        EnvId: string;
        /**
         * 环境名称。
         * @example `test-create`
         */
        EnvName: string;
        /**
         * 环境依赖的文件。
         */
        Files: {
            /**
             * 文件名。建议与**FileOssAddress**的文件名保持一致。
             * @example `json.jar`
             */
            FileName: string;
            /**
             * 您自己的OSS文件地址，要求公网可访问。
             * >目前只支持上海地域的OSS地址。
             * @example `https://test.oss-cn-shanghai.aliyuncs.com/json.jar`
             */
            FileOssAddress: string;
        }[];
        /**
         * JMeter属性。
         */
        Properties: {
            /**
             * 属性名。
             * @example `remote_hosts`
             */
            Name: string;
            /**
             * 属性值。
             * @example `127.0.0.1`
             */
            Value: string;
            /**
             * 描述。
             * @example `远程主机`
             */
            Description: string;
        }[];
        /**
         * 插件标签。
         * @example `test`
         */
        JmeterPluginLabel: string;
    };
}
