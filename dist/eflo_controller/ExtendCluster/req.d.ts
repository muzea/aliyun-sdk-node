export interface ExtendClusterRequest {
    /**
     * 集群id
     * @example `i15b480fbd2fcdbc2869cd80`
     */
    "ClusterId"?: string;
    /**
     * 节点组
     */
    "NodeGroups"?: {
        /**
         * 节点列表
         */
        Nodes: {
            /**
             * 主机名
             * @example `d044d220-33fd-11ed-86a6`
             */
            Hostname: string;
            /**
             * 登录密码
             * @example `***`
             */
            LoginPassword: string;
            /**
             * 节点id
             * @example `e01-cn-zvp2zdpy601`
             */
            NodeId: string;
            /**
             * 专有网络id
             * @example `vpc-0jlasms92fdxqd3wlf8ny`
             */
            VpcId: string;
            /**
             * 交换机id
             * @example `vsw-bp169pi5fj151rrms4sia`
             */
            VSwitchId: string;
        }[];
        /**
         * 节点组id
         * @example `i16d4883a46cbadeb4bc9`
         */
        NodeGroupId: string;
        /**
         * 自定义数据
         * @example `#!/bin/sh
        echo "Hello World. The time is now $(date -R)!" | tee /root/userdata_test.txt`
         */
        UserData: string;
        ZoneId: string;
    }[];
    /**
     * 是否允许跳过失败节点，默认值为False
     * @example `False
    `
     */
    "IgnoreFailedNodeTasks"?: boolean;
    /**
     * 集群子网列表
     */
    "VpdSubnets"?: string[];
    /**
     * 分配ip的组合策略： 每个策略只能选择一种策略类型，可以有多个策略进行组合
     */
    "IpAllocationPolicy"?: {
        /**
         * 根据bond名称指定集群子网id
         */
        BondPolicy: {
            /**
             * 默认bond集群子网
             * @example `subnet-3od2fe`
             */
            BondDefaultSubnet: string;
            /**
             * bond信息
             */
            Bonds: {
                /**
                 * bond名称
                 * @example `Bond0`
                 */
                Name: string;
                /**
                 * ip来源集群子网
                 * @example `subnet-3od2fe
                `
                 */
                Subnet: string;
            }[];
        };
        /**
         * 机型分配策略
         */
        MachineTypePolicy: {
            /**
             * bond信息
             */
            Bonds: {
                /**
                 * bond名称
                 * @example `Bond0`
                 */
                Name: string;
                /**
                 * ip来源集群子网
                 * @example `subnet-fdo3dv`
                 */
                Subnet: string;
            }[];
            /**
             * 机型
             * @example `efg1.nvga1`
             */
            MachineType: string;
        }[];
        /**
         * 节点分配策略
         */
        NodePolicy: {
            /**
             * bond信息
             */
            Bonds: {
                /**
                 * bond名称
                 * @example `Bond0`
                 */
                Name: string;
                /**
                 * ip来源集群子网
                 * @example `subnet-fdo3dv`
                 */
                Subnet: string;
            }[];
            /**
             * 节点id
             * @example `i-3fdodw2`
             */
            NodeId: string;
        }[];
    }[];
    "VSwitchZoneId"?: string;
}
