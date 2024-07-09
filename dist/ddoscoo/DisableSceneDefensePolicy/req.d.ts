export interface DisableSceneDefensePolicyRequest {
    /**
     * 要禁用的策略ID。
     * > 您可以调用[DescribeSceneDefensePolicies](~~159382~~)查询所有策略ID。
     * @example `321a-fd31-df51-****`
     */
    "PolicyId": string;
}
