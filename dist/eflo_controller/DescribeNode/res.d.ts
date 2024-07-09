export interface DescribeNodeResponse {
    /**
     * 请求id
     * @example `AC4F0004-7BCE-52E0-891B-CAC7D64E3368`
     */
    RequestId: string;
    /**
     * 节点组名称
     * @example `emr-default`
     */
    NodeGroupName: string;
    /**
     * 集群id
     * @example `i116913051662373010974`
     */
    ClusterId: string;
    /**
     * 集群名称
     * @example `Standard_Cluster`
     */
    ClusterName: string;
    /**
     * 可用区id
     * @example `cn-hangzhou-i`
     */
    ZoneId: string;
    /**
     * 创建时间
     * @example `2022-09-30T03:35:53Z`
     */
    CreateTime: string;
    /**
     * 节点组id
     * @example `ng-ec3c96ff0aa4c60d`
     */
    NodeGroupId: string;
    /**
     * 主机名
     * @example `31d38530-241e-11ed-bc63-acde48001122`
     */
    Hostname: string;
    /**
     * 镜像id
     * @example `i190297201634099844192`
     */
    ImageId: string;
    /**
     * 机型
     * @example `efg1.nvga1`
     */
    MachineType: string;
    /**
     * 节点id
     * @example `e01-cn-zvp2tgykr08`
     */
    NodeId: string;
    /**
     * 机器唯一标识
     * @example `sag42ckf4jx`
     */
    Sn: string;
    /**
     * 节点状态
     * @example `Using`
     */
    OperatingState: string;
    /**
     * 过期时间
     * @example `2022-06-23T16:00:00Z`
     */
    ExpiredTime: string;
    /**
     * 网络信息
     */
    Networks: {
        /**
         * 网卡端口信息
         * @example `Bond0`
         */
        BondName: string;
        /**
         * 机器ip
         * @example `47.254.235.44`
         */
        Ip: string;
        /**
         * 集群子网id
         * @example `vsw-uf68v51fldm5egmui5a6k`
         */
        SubnetId: string;
        /**
         * 集群网络id
         * @example `vpd-xcuhjyrj`
         */
        VpdId: string;
    }[];
    /**
     * 镜像名称
     * @example `Centos7.9_all_0811`
     */
    ImageName: string;
    HpnZone: string;
    ResourceGroupId: string;
}
