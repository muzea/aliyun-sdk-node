export interface UpgradeMinorVersionRequest {
    /**
     * 集群ID。
     * @example `hb-t4naqsay5gn****`
     */
    "ClusterId": string;
    /**
     * 要升级的组件名称，多个组件中间逗号隔开。
     * @example `HADOOP`
     */
    "Components"?: string;
}
