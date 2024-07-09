export interface ModifyClusterOfflineConfigRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 请求结构。
     * @example `{}`
     */
    "body"?: {
        /**
         * 数据源名称
         * @example `ha-cn-pl32rf0****_test_api`
         */
        dataSourceName: string;
        /**
         * 数据源类型 (odps: maxComputer, swift: swift, unKnow)
         * @example `odps`
         */
        dataSourceType: string;
        /**
         * 数据源部署
         * @example `vpc_hz_domain_1`
         */
        domain: string;
        /**
         * key:配置名称
         */
        config: any;
        /**
         * 对于odps数据源触发全量时必传
         * @example `ds=20211202`
         */
        partition: string;
        /**
         * 对于API推送数据源触发全量时必传
         * @example `1640867288`
         */
        dataTimeSec: number;
        /**
         * 索引重建方式 (api: API方式推送数据源, indexRecover: 从索引中恢复数据源)
         * @example `indexRecover`
         */
        buildMode: string;
        /**
         * 索引全量版本
         * @example `160142641`
         */
        generation: number;
        /**
         * 推送配置方式: 默认仅推送配置
         * @example `PUSH_ONLY`
         */
        pushMode: string;
    };
}
