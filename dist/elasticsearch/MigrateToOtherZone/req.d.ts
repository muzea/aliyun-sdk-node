export interface MigrateToOtherZoneRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 校验是否可以进行可用区节点迁移。true表示只校验不执行迁移任务；false表示校验通过后即进行迁移任务。
     * @example `false`
     */
    "dryRun": boolean;
    "body"?: string;
}
