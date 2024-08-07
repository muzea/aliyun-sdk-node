export interface UpgradeMultiZoneClusterRequest {
    /**
     * 多可用区实例Id。
     * @example `ld-***************`
     */
    "ClusterId": string;
    /**
     * 可选参数，执行模式，如果UpgradeInsName不为空，则强制设置为single模式，如果UpgradeInsName为空且未设置RunMode，默认为serial。可选值
     * serial 子实例都会升级
     * single 指定的单个子实例升级
     * @example `serial`
     */
    "RunMode"?: string;
    /**
     * 要升级的子实例的实例名称，可通过DescribeMultiZoneCluster接口里的MultiZoneInstanceModels字段下属性获得，可选参数，不填时子实例全部升级。
     * @example `ld-t4n40m3171t4******-az-b`
     */
    "UpgradeInsName"?: string;
    /**
     * 组件名称，可传多个，逗号隔开。
     * @example `LINDORM`
     */
    "Components": string;
    /**
     * 可选参数，升级到指定rpm的版本，不指定的话升级到最新版，如果Components为多个，要传Versions时也要传多个，英文逗号隔开。
     * @example `t-apsara-lindorm-2.1.20-20200518175539.alios7.x86_64`
     */
    "Versions"?: string;
    /**
     * 可选参数，升级后需要重启的组件名称，多个可用英文逗号分隔。
     * @example `LPROXY`
     */
    "RestartComponents"?: string;
}
