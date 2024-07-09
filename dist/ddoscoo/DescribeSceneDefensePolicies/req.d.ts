export interface DescribeSceneDefensePoliciesRequest {
    /**
     * 要查询的策略使用的模板类型。取值：
     * - **promotion**：表示重大活动模板。
     * - **bypass**：表示全量转发模板。
     * @example `promotion`
     */
    "Template"?: string;
    /**
     * 要查询的策略的生效状态。取值：
     * - **0**：表示已被禁用。
     * - **1**：表示等待生效。
     * - **2**：表示生效中。
     * - **3**：表示已过期。
     * @example `1`
     */
    "Status"?: string;
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
}
