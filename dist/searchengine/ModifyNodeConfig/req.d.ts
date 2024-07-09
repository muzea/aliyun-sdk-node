export interface ModifyNodeConfigRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 算法类型
     * - pop 人气模型
     * - cp 类目预测
     * - hot 热词
     * - hint 底纹
     * - suggest 下拉提示
     * @example `hot`
     */
    "type": string;
    /**
     * 修改前的配置名称。
     * @example `ha-cn-pl32rf0****_qrs`
     */
    "name": string;
    /**
     * 集群名称。
     * @example `vpc_sh_domain_2`
     */
    "clusterName"?: string;
    /**
     * 数据来源名称。取值：-search：搜索数据。-not_search：不搜索数据。
     * @example `search`
     */
    "dataSourceName"?: string;
    /**
     * 请求体参数
     * @example `{\"desc\":\"new version\"}`
     */
    "body"?: {
        /**
         * 数据分片数
         * @example `1`
         */
        dataFragmentNumber: number;
        /**
         * 数据副本数
         * @example `1`
         */
        dataDuplicateNumber: number;
        /**
         * 最小服务比例
         * @example `10`
         */
        minServicePercent: number;
        /**
         * 集群是否挂载
         * @example `true`
         */
        published: boolean;
        /**
         * 在线生效（索引是否从在线下掉）
         * @example `true`
         */
        active: boolean;
        /**
         * 流量比例
         * @example `100`
         */
        flowRatio: number;
    };
}
