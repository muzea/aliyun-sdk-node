export interface DescribeSceneDefenseObjectsRequest {
    /**
     * 要查询的策略ID。
     * > 您可以调用[DescribeSceneDefensePolicies](~~159382~~)查询所有策略ID。
     * @example `47e07ebd-0ba5-4afc-957b-59d15b90****`
     */
    "PolicyId": string;
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
}
