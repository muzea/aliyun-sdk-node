export interface CreateDBNodesRequest {
    /**
     * 该参数用于保证请求的幂等性，防止重复提交请求。参数值由客户端生成，保证在不同请求间唯一。
     * 该参数值由ASCII字符组成，最长不超过64个字符，不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-2ze450g4ctg6t****`
     */
    "DBInstanceId": string;
    /**
     * 集群节点列表。
     */
    "DBNode": {
        /**
         * 节点规格信息。
         * @example `mysql.n2.medium.xc`
         */
        classCode: string;
        /**
         * 节点所在的可用区ID。
         * @example `cn-zhangjiakou-a`
         */
        zoneId: string;
        /**
         * 节点使用的虚拟交换机ID。
         * @example `vsw-bp1sxxsodv28ey5dl****`
         */
        vswitchId: string;
    }[];
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute接口获取。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
