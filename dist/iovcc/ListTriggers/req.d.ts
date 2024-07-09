export interface ListTriggersRequest {
    /**
     * 项目ID
     * @example `PE9FQC48`
     */
    "ProjectId": string;
    /**
     * 命名空间，如：syncstore的namespace
     * @example `f323baa35c304751a4b1254adc8230bf`
     */
    "Namespace": string;
    /**
     * 目标页号，默认为1
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 每页所显示的项数，默认为10
     * @example `10`
     */
    "PageSize"?: number;
}
