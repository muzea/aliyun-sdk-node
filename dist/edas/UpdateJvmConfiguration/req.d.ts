export interface UpdateJvmConfigurationRequest {
    /**
     * 应用ID
     * @example `c627c157-560d-*************`
     */
    "AppId": string;
    /**
     * 分组ID，您可调用[ListDeployGroup](~~62077~~)来查询。
     * > - 如果ID不为空，设置分组信息。
     * - ID为空，则设置应用的配置信息。
     * @example `0afc726e-077e-4357-98b2-db9f7145****`
     */
    "GroupId"?: string;
    /**
     * 自定义参数：
     * > - 分组配置不设置该参数，使用应用配置。
     * - 应用配置不设置该参数，使用默认值。
     * @example `-Dproperty=value`
     */
    "Options"?: string;
    /**
     * 初始化堆内存大小，单位MB：
     * > -  分组配置不设置该参数，使用应用配置。
     * - 应用配置不设置该参数，使用默认值。
     * @example `500`
     */
    "MinHeapSize"?: number;
    /**
     * 持久代内存大小，单位MB：
     * > -  分组配置不设置该参数，使用应用配置。
     * - 应用配置不设置该参数，使用默认值。
     * @example `1000`
     */
    "MaxPermSize"?: number;
    /**
     * 最大堆内存大小，单位MB：
     * > -  分组配置不设置该参数，使用应用配置。
     * - 应用配置不设置该参数，使用默认值。
     * @example `500`
     */
    "MaxHeapSize"?: number;
}
