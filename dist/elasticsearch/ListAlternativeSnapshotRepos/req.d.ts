export interface ListAlternativeSnapshotReposRequest {
    /**
     * 实例ID。
     * @example `es-cn-0pp1jxvcl000z****`
     */
    "InstanceId": string;
    /**
     * 是否返回已添加的OSS引用仓库。true为默认值，表示返回；false表示不返回。
     * @example `true`
     */
    "alreadySetItems"?: boolean;
}
