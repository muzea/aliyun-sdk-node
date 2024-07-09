export interface DescribeDBInstanceViaEndpointResponse {
    /**
     * 请求ID。
     * @example `14036EBE-CF2E-44DB-ACE9-AC6157D3A6FC`
     */
    RequestId: string;
    /**
     * 实例信息
     */
    DBInstance: {
        /**
         * 实例类型：
         * - **ReadWrite**： 主实例；
         * - **ReadOnly**： 只读实例。
         * @example `ReadWrite`
         */
        Type: string;
        /**
         * 实例状态，详情请参见[实例状态表](~~339826~~)。
         * @example `Running`
         */
        Status: string;
        /**
         * 三权分立状态：
         * - **disabled**：未开启；
         * - **enabled**：开启；
         * - **processing**： 处理中；
         * - **unknown**：未知，可能是实例无法连接导致。
         * @example `disabled`
         */
        RightsSeparationStatus: string;
        /**
         * 实例节点数量。
         * @example `2`
         */
        DBNodeCount: number;
        /**
         * 是否过期：
         * - **true**：过期；
         * - **false**：正常。
         * @example `false`
         */
        Expired: string;
        /**
         * 创建时间。
         * @example `2021-08-31T08:56:25.000+0000`
         */
        CreateTime: string;
        /**
         * 实例付费方式，取值：
         * - **Postpaid**：按量付费；
         * - **Prepaid**：包年包月。
         * @example `Postpaid`
         */
        PayType: string;
        /**
         * 实例连接端口
         * @example `3306`
         */
        Port: string;
        /**
         * 实例锁定模式：
         * - **Unlock**：正常；
         * - **ManualLock**：手动触发锁定；
         * - **LockByExpiration**：实例过期自动锁定；
         * - **LockByRestoration**：实例回滚前的自动锁定；
         * - **LockByDiskQuota**：实例空间满自动锁定；
         * - **LockReadInstanceByDiskQuota**：只读实例空间满自动锁定。
         * @example `Unlock`
         */
        LockMode: string;
        /**
         * 实例描述。
         * @example `test instance`
         */
        Description: string;
        /**
         * 实例连接地址
         * @example `pxc-sprpx766vo****.polarx.singapore.rds.aliyuncs.com`
         */
        ConnectionString: string;
        /**
         * 已经使用的存储，单位为B。
         * @example `17042505728`
         */
        StorageUsed: number;
        /**
         * 到期时间。格式为yyyy-MM-ddTHH:mm:ss.sss+0000（UTC时间）。
         * @example `2022-08-31T16:00:00.000+0000`
         */
        ExpireDate: string;
        /**
         * 实例商品种类，固定取值为drds_polarxpost_public_cn。
         * @example `drds_polarxpost_public_cn`
         */
        CommodityCode: string;
        /**
         * 实例可维护开始时间，此处为UTC时间，加8小时才是控制台上显示的可维护时间段。
         * @example `06:00`
         */
        MaintainStartTime: string;
        /**
         * 实例类型：
         * - **ReadWrite**： 主实例；
         * - **ReadOnly**： 只读实例。
         * @example `ReadWrite`
         */
        DBInstanceType: string;
        /**
         * 实例节点规格。
         * @example `polarx.x4.large.2e`
         */
        DBNodeClass: string;
        /**
         * 当前实例支持的最新内核版本。
         * @example `polarx-kernel_5.4.11-16301083_xcluster-20210805`
         */
        LatestMinorVersion: string;
        /**
         * 实例可维护结束时间，此处为UTC时间，加8小时为控制台上显示的可维护时间段。
         * @example `06:00`
         */
        MaintainEndTime: string;
        /**
         * 数据库类型，固定取值为polarx。
         * @example `polarx`
         */
        DBType: string;
        /**
         * 三权分立状态：
         * - **false**：未开启
         * - **true**：开启
         * @example `false`
         */
        RightsSeparationEnabled: boolean;
        /**
         * VPC ID。
         * @example `vpc-xxxxx`
         */
        VPCId: string;
        /**
         * 当前内核版本。
         * @example `polarx-kernel_5.4.11-16301083_xcluster-20210805`
         */
        MinorVersion: string;
        /**
         * 实例所在地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 实例的网络类型，仅支持取值VPC，表示专有网络。
         * @example `VPC`
         */
        Network: string;
        /**
         * 数据库版本。
         * @example `5.5`
         */
        DBVersion: string;
        /**
         * 交换机ID。
         * @example `vsw-********`
         */
        VSwitchId: string;
        /**
         * 实例所在可用区。
         * @example `cn-hangzhou-a`
         */
        ZoneId: string;
        /**
         * 数据库类型，固定取值为MySQL。
         * @example `MySQL`
         */
        Engine: string;
        /**
         * 实例引擎版本，内部参数。
         * @example `18`
         */
        KindCode: number;
        /**
         * 主实例的ID，如果没有返回此参数则表示该实例是主实例。
         * @example `pxc-zkralxpc5d****`
         */
        Id: string;
        /**
         * 数据库节点信息。
         */
        DBNodes: {
            /**
             * 计算节点名称。
             * @example `pxc-i-********`
             */
            ComputeNodeId: string;
            /**
             * 节点规格。
             * @example `polarx.x4.large.2e`
             */
            NodeClass: string;
            /**
             * 存储节点名称。
             * @example `pxc-xdb-xxxxxx`
             */
            DataNodeId: string;
            /**
             * 节点所在可用区名称。
             * @example `cn-hangzhou-a`
             */
            ZoneId: string;
            /**
             * 逻辑节点ID。
             * @example `pxi-*********`
             */
            Id: string;
            /**
             * 节点所在地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
        /**
         * 连接地址信息。
         */
        ConnAddrs: {
            /**
             * 连接的种类，**VPC**为内网连接，**PUBLIC**为公网连接。
             * @example `VPC`
             */
            Type: string;
            /**
             * 交换机ID。
             * @example `vsw-*********`
             */
            VSwitchId: string;
            /**
             * 连接端口号。
             * @example `3306`
             */
            Port: number;
            /**
             * VPC ID。
             * @example `vpc-xxxxxx`
             */
            VPCId: string;
            /**
             * 连接地址。
             * @example `polardbx-xxx.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * vpc 内部CloudInstanceId，可以忽略
             * @example `pxc-zkralxpc5d****`
             */
            VpcInstanceId: string;
        }[];
        /**
         * 只读实例名称。
         */
        ReadDBInstances: string[];
        /**
         * 资源组ID
         * @example `rg-xxxx`
         */
        ResourceGroupId: string;
        /**
         * 标签集合
         */
        TagSet: {
            /**
             * 标签名称
             * @example `key2`
             */
            Key: string;
            /**
             * 标签值
             * @example `value2`
             */
            Value: string;
        }[];
        /**
         * CN节点数量。
         * @example `2`
         */
        CnNodeCount: number;
        /**
         * DN节点数量。
         * @example `2`
         */
        DnNodeCount: number;
        /**
         * CN节点规格：
         * - **polarx.x4.medium.2e**：2核8G
         * - **polarx.x4.large.2e**：4核16G
         * - **polarx.x8.large.2e**：4核32G
         * - **polarx.x4.xlarge.2e**：8核32G
         * - **polarx.x8.xlarge.2e**：8核64G
         * - **polarx.x4.2xlarge.2e**：16核64G
         * - **polarx.x8.2xlarge.2e**：16核128G
         * - **polarx.x4.4xlarge.2e**：32核128G
         * - **polarx.x8.4xlarge.2e**：32核256G
         * - **polarx.st.8xlarge.2e**：60核470G
         * - **polarx.st.12xlarge.2e**：90核720G
         * @example `polarx.x4.xlarge.2e`
         */
        CnNodeClassCode: string;
        /**
         * DN节点规格：
         * - **mysql.n2.medium.25**：2核4G
         * - **mysql.n4.medium.25**：2核8G
         * - **mysql.x8.medium.25**：2核16G
         * - **mysql.n2.large.25**：4核8G
         * - **mysql.n4.large.25**：4核16G
         * - **mysql.x8.large.25**：4核32G
         * - **mysql.n2.xlarge.25**：8核16G
         * - **mysql.n4.xlarge.25**：8核32G
         * - **mysql.x8.xlarge.25**：8核64G
         * - **mysql.n4.2xlarge.25**：16核64G
         * - **mysql.x8.2xlarge.25**：16核128G
         * - **mysql.x4.4xlarge.25**：32核128G
         * - **mysql.x8.4xlarge.25**：32核256G
         * - **mysql.st.8xlarge.25**：60核470G
         * - **mysql.st.12xlarge.25**：90核720G
         * @example `mysql.x8.large.25`
         */
        DnNodeClassCode: string;
        /**
         * 实例系列，取值如下：
         * - **enterprise**：企业版
         * - **standard**：标准版
         * @example `enterprise`
         */
        Series: string;
        /**
         * LTS版本号。
         */
        LTSVersions: string[];
    };
}
