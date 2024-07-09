export interface DescribeVirtualNodesResponse {
    /**
     * 查询到的虚拟节点数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 下一个查询开始的Token。
     * @example `d78f2dd8-5979-42fe-****-b16db43be5bc`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `9C9B9917-ED22-50D5-ADE6-9FA9D58AD05F`
     */
    RequestId: string;
    /**
     * 虚拟节点信息集合。
     */
    VirtualNodes: {
        /**
         * 虚拟节点状态。可能值：
         * - Pending
         * - Ready
         * - Failed
         * @example `Ready`
         */
        Status: string;
        /**
         * 虚拟节点创建时间。UTC时间，RFC 3339标准。
         * @example `2021-09-08T15:00:00Z`
         */
        CreationTime: string;
        /**
         * 虚拟节点所属的VPC ID。
         * @example `vpc-1vzjjflab6wvjox****`
         */
        VpcId: string;
        /**
         * 虚拟节点的公网IP。
         * @example `192.0.XX.XX`
         */
        InternetIp: string;
        /**
         * 虚拟节点绑定的标签信息。
         */
        Tags: {
            /**
             * 标签键。
             * @example `name`
             */
            Key: string;
            /**
             * 标签值。
             * @example `test`
             */
            Value: string;
        }[];
        /**
         * 事件信息。
         */
        Events: {
            /**
             * 事件类型。可能值：
             * - Normal
             * - Warning
             * @example `Normal`
             */
            Type: string;
            /**
             * 事件结束时间。
             * @example `2021-09-08T02:24:52Z`
             */
            LastTimestamp: string;
            /**
             * 事件消息。
             * @example `Successfully`
             */
            Message: string;
            /**
             * 事件的归属对象名。
             * @example `test`
             */
            Name: string;
            /**
             * 事件名。
             * @example `Created`
             */
            Reason: string;
            /**
             * 事件数。
             * @example `1`
             */
            Count: number;
            /**
             * 事件开始时间。
             * @example `2021-09-08T02:24:48Z`
             */
            FirstTimestamp: string;
        }[];
        /**
         * 虚拟节点ID。
         * @example `vnd-2ze960zkdqrldeaw****`
         */
        VirtualNodeId: string;
        /**
         * 虚拟节点的内网IP。
         * @example `10.19.XX.XX`
         */
        IntranetIp: string;
        /**
         * 虚拟节点所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 虚拟节点所属的交换机ID。
         * @example `vsw-2ze23nqzig8inprou****`
         */
        VirtualNodeVSwitchId: string;
        /**
         * 虚拟节点所属的安全组ID。
         * @example `sg-2zeeyaaxlkq9sppl****`
         */
        VirtualNodeSecurityGroupId: string;
        /**
         * 虚拟节点所属的资源组ID。
         * @example `rg-uf66jeqopgqa9hdn****`
         */
        ResourceGroupId: string;
        /**
         * 虚拟节点的名称。
         * @example `testNode`
         */
        VirtualNodeName: string;
    }[];
}
