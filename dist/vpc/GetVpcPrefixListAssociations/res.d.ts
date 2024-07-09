export interface GetVpcPrefixListAssociationsResponse {
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 条目数。
     * @example `1`
     */
    Count: number;
    /**
     * 前缀列表的关联关系列表信息。
     */
    PrefixListAssociation: {
        /**
         * 前缀列表的实例ID。
         * @example `pl-0b7hwu67****`
         */
        PrefixListId: string;
        /**
         * 关联的资源ID。
         * @example `vtb-bp1drpcfz9srr393h****`
         */
        ResourceId: string;
        /**
         * 关联的资源类型。取值：
         * - **vpcRouteTable**：VPC路由表。
         * - **trRouteTable**：转发路由器的路由表。
         * @example `vpcRouteTable`
         */
        ResourceType: string;
        /**
         * 前缀列表所属的阿里云账号（主账号）ID。
         * @example `153460731706****`
         */
        OwnerId: string;
        /**
         * 前缀列表的关联状态。取值：
         * - **Created**：成功。
         * - **ModifyFailed**：未关联到最新版本。
         * - **Creating**：创建中。
         * - **Modifying**：修改中。
         * - **Deleting**：删除中。
         * - **Deleted**：已删除。
         * @example `Success`
         */
        Status: string;
        /**
         * 关联失败时的原因。
         * @example `failed`
         */
        Reason: string;
        /**
         * 要查询的前缀列表所在地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 前缀列表所绑定资源所属的阿里云账号（主账号）ID。
         * @example `132193271328****`
         */
        ResourceUid: string;
    }[];
}
