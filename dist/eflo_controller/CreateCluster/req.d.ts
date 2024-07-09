export interface CreateClusterRequest {
    /**
     * 集群名称
     * @example `Standard_Cluster`
     */
    "ClusterName"?: string;
    /**
     * 集群类型
     * @example `Lite`
     */
    "ClusterType"?: string;
    /**
     * 集群描述
     * @example `标准集群测试`
     */
    "ClusterDescription"?: string;
    /**
     * 节点组列表
     */
    "NodeGroups"?: {
        /**
         * 节点列表
         */
        Nodes: {
            /**
             * 节点id
             * @example `e01poc-cn-i7m2wnivf0d`
             */
            NodeId: string;
            /**
             * 主机名
             * @example `8d13b784-17a9-11ed-bc7b-acde48001122`
             */
            Hostname: string;
            /**
             * 登录密码
             * @example `***`
             */
            LoginPassword: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-bp169pi5fj151rrms4sia`
             */
            VSwitchId: string;
            /**
             * 专有网络ID
             * @example `vpc-0jlasms92fdxqd3wlf8ny`
             */
            VpcId: string;
        }[];
        /**
         * 节点组名称
         * @example `emr-default`
         */
        NodeGroupName: string;
        /**
         * 节点组描述
         * @example `默认节点组`
         */
        NodeGroupDescription: string;
        /**
         * 机型
         * @example `efg1.nvga1`
         */
        MachineType: string;
        /**
         * 系统镜像id
         * @example `i190297201634099844192`
         */
        ImageId: string;
        /**
         * 可用区id
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
        /**
         * 实例自定义数据。需要以Base64方式编码，原始数据最多为16 KB。
         * @example `ZWNobyBoZWxsbyBlY3Mh`
         */
        UserData: string;
    }[];
    /**
     * 是否允许跳过失败节点，默认值为False
     * @example `False`
     */
    "IgnoreFailedNodeTasks"?: boolean;
    /**
     * 资源组id
     * @example `rg-aek2xdkc6icwfha`
     */
    "ResourceGroupId"?: string;
    /**
     * 网络信息
     */
    "Networks"?: {
        /**
         * Vpd配置信息
         */
        NewVpdInfo: {
            /**
             * 云企业网id
             * @example `cen-1gb1eftc5qp2ao75fo`
             */
            CenId: string;
            /**
             * 云链cidr
             * @example `172.16.0.0/24`
             */
            CloudLinkCidr: string;
            /**
             * 云链id
             * @example `vcc-cn-c4dtycm5i08`
             */
            CloudLinkId: string;
            /**
             * 专有网络
             * @example `vpc-0jl2x45apm6odc2c10h25`
             */
            MonitorVpcId: string;
            /**
             * 专有网络交换机
             * @example `vsw-0jl2w3ffbghkss0x2foff`
             */
            MonitorVswitchId: string;
            /**
             * 集群网段
             * @example `192.168.0.0/16`
             */
            VpdCidr: string;
            /**
             * 集群子网
             */
            VpdSubnets: {
                /**
                 * 子网cidr
                 * @example `10.0.1.8/24`
                 */
                SubnetCidr: string;
                /**
                 * 子网类型
                 * @example `10.0.2.8/24`
                 */
                SubnetType: string;
                /**
                 * 可用区id
                 * @example `cn-wulanchabu-b`
                 */
                ZoneId: string;
            }[];
        };
        /**
         * 复用VPD信息
         */
        VpdInfo: {
            /**
             * 专有网络 id
             * @example `vpd-vfuz6ejv`
             */
            VpdId: string;
            /**
             * 集群子网id列表
             */
            VpdSubnets: string[];
        };
        /**
         * IP分配策略
         */
        IpAllocationPolicy: {
            /**
             * bond策略
             */
            BondPolicy: {
                /**
                 * 默认bond集群子网
                 * @example `172.168.0.0/24`
                 */
                BondDefaultSubnet: string;
                /**
                 * bond信息
                 */
                Bonds: {
                    /**
                     * bond名称
                     * @example `bond0`
                     */
                    Name: string;
                    /**
                     * ip来源集群子网
                     * @example `172.16.0.0/24`
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
                     * @example `bond0`
                     */
                    Name: string;
                    /**
                     * ip来源集群子网
                     * @example `192.168.1.0/24`
                     */
                    Subnet: string;
                }[];
                /**
                 * 机型
                 * @example `efg1.nvga8n`
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
                     * @example `bond0
                    `
                     */
                    Name: string;
                    /**
                     * ip来源集群子网
                     * @example `10.0.0.0/24`
                     */
                    Subnet: string;
                }[];
                /**
                 * 节点id
                 * @example `e01-cn-2r42vq62001`
                 */
                NodeId: string;
            }[];
        }[];
        SecurityGroupId: string;
        VSwitchZoneId: string;
        VpcId: string;
        VSwitchId: string;
        TailIpVersion: string;
    };
    /**
     * 资源标签
     */
    "Tag"?: {
        /**
         * 键
         * @example `env-name`
         */
        Key: string;
        /**
         * 值
         * @example `dev`
         */
        Value: string;
    }[];
    /**
     * 组件（软件实例）
     */
    "Components"?: {
        /**
         * 组件类型
         * @example `ACKEdge`
         */
        ComponentType: string;
        /**
         * 组件配置
         */
        ComponentConfig: {
            /**
             * 组件基础参数
             * @example `{
                  "EndpointPublicAccess": false,
                  "ContainerCidr": "10.4.0.0/24",
                  "KeyPair": "test",
                  "NodeCidrMask": "25",
                  "ResourceGroupId": "rg-axsadm3sdzsdvdsndstdisd",
                  "WorkerSystemDiskCategory": "da",
                  "WorkerSystemDiskSize": 40,
                  "DeletionProtection": false,
                  "KubeProxy": "iptables",
                  "Name": "da",
                  "LoadBalancerSpec": "slb.s1.small",
                  "Runtime": {
                        "Version": "19.03.15",
                        "Name": "docker"
                  },
                  "IsEnterpriseSecurityGroup": true,
                  "Vpcid": "192.168.23.0/24",
                  "NumOfNodes": 1,
                  "VswitchIds": [
                        "dad"
                  ],
                  "ServiceCidr": "10.0.0.0/16",
                  "SnatEntry": false,
                  "kubernetesVersion": "1.20.11-aliyunedge.1",
                  "WorkerInstanceTypes": [
                        "da"
                  ]
            }`
             */
            BasicArgs: any;
            /**
             * 节点池配置， 并用于建立节点组和节点池的对应关系。 当
             * ComponentType=”ACKEdge“时必填，其他为空。
             */
            NodeUnits: any[];
        };
    }[];
    /**
     * 集群编号
     * @example `A1`
     */
    "HpnZone"?: string;
    /**
     * Node虚拟交换机
     */
    "NimizVSwitches"?: string[];
}
