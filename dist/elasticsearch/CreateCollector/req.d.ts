export interface CreateCollectorRequest {
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 请求体参数。用来指定待创建采集器的配置信息。
     * @example `{     "dryRun": false,      "name": "test_beats_1",      "resType": "fileBeat",      "resVersion": "6.8.5_with_community",      "vpcId": "vpc-bp12nu14urf0upaf*****",      "collectorPaths": [         "/var/log"     ],      "configs": [         {             "fileName": "filebeat.yml",              "content": "filebeat.inputs:xxx"         }     ] }`
     */
    "body"?: {
        /**
         * 是否校验并创建采集器，只有在创建或更新采集器时使用此参数。可选值：
         * - true：只校验不更新
         * - false：校验并更新
         * @example `true`
         */
        dryRun: boolean;
        /**
         * 采集器名称。长度为1~30个字符，以大小写字母开头，可以包含字母、数字、下划线（_）或连字符（-）。
         * @example `ct-test`
         */
        name: string;
        /**
         * 采集器类型。可选值：fileBeat、metricBeat、heartBeat和auditBeat。
         * @example `fileBeat`
         */
        resType: string;
        /**
         * 采集器所在的专有网络ID。
         * @example `vpc-bp12nu14urf0upaf*****`
         */
        vpcId: string;
        /**
         * 采集器版本。可选值：
         * - 基于ECS部署：6.8.5_with_community
         * - 基于ACK部署：6.8.13_with_community
         * @example `6.8.5_with_community`
         */
        resVersion: string;
        /**
         * fileBeat采集路径。仅当采集器的安装机器为ECS时，需要配置。
         */
        collectorPaths: string[];
        /**
         * 采集器的配置文件信息。
         */
        configs: {
            /**
             * 文件名。
             * @example `filebeat.yml`
             */
            fileName: string;
            /**
             * 文件内容。
             * @example `"filebeat.inputs:xxx"`
             */
            content: string;
        }[];
        /**
         * 采集器扩展配置。
         */
        extendConfigs: any[];
    };
}
