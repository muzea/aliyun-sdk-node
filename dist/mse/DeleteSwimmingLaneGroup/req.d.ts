export interface DeleteSwimmingLaneGroupRequest {
    /**
     * 全链路泳道组ID
     * @example `145`
     */
    "GroupId"?: number;
    /**
     * MSE命名空间名字
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 名称
     * @example `example-app`
     */
    "Name"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
