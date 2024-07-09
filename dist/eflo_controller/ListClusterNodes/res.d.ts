export interface ListClusterNodesResponse {
    /**
     * 请求id
     * @example `2BA76272-6608-5AEC-BBA8-B6F0D3D14CDB`
     */
    RequestId: string;
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAXW/ZB9TBvH+0ZK0phtCibQgQmu1RbqplAI6Velo2OKR`
     */
    NextToken: string;
    /**
     * 节点列表
     */
    Nodes: {
        /**
         * 创建时间
         * @example `1642472468000
        `
         */
        CreateTime: string;
        /**
         * 机器过期时间
         * @example `1762185600000`
         */
        ExpiredTime: string;
        /**
         * 主机名
         * @example `72432f80-273e-11ed-b57a-acde48001122`
         */
        Hostname: string;
        /**
         * 系统镜像id
         * @example `i190297201669099844192`
         */
        ImageId: string;
        /**
         * 机型
         * @example `cn-wulanchabu-b11`
         */
        MachineType: string;
        /**
         * 节点组id
         * @example `ng-e9b74f4d450cf18d`
         */
        NodeGroupId: string;
        /**
         * 节点组名称
         * @example `emr_master`
         */
        NodeGroupName: string;
        /**
         * 节点id
         * @example `e01-cn-2r42tmj4z02`
         */
        NodeId: string;
        /**
         * 节点状态
         * @example `Extending`
         */
        OperatingState: string;
        /**
         * 机器sn
         * @example `sn_tOuUk`
         */
        Sn: string;
        /**
         * 可用区id
         * @example `cn-hangzhou-b`
         */
        ZoneId: string;
        /**
         * 网络信息
         */
        Networks: {
            /**
             * 机器网口名称
             * @example `bond0`
             */
            BondName: string;
            /**
             * 专有网络内的机器ip
             * @example `192.168.22.2`
             */
            Ip: string;
            /**
             * 专有网络子网id
             * @example `subnet-fwekrvg9`
             */
            SubnetId: string;
            /**
             * 专有网络 id
             * @example `vpd-eoiy88ju`
             */
            VpdId: string;
        }[];
        HpnZone: string;
    }[];
}
