export interface DescribeDBInstancesResponse {
    /**
     * 请求ID。
     * @example `C458B1E8-1683-3645-B154-6BA32080EEA`
     */
    RequestId: string;
    /**
     * 页面下标。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页面大小。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总数。
     * @example `30`
     */
    TotalNumber: number;
    /**
     * 实例列表。
     */
    DBInstances: {
        /**
         * 实例类型：
         * - **ReadWrite**： 主实例
         * - **ReadOnly**： 只读实例
         * @example `ReadWrite`
         */
        Type: string;
        /**
         * 实例状态，详情请参见[实例状态表](~~339826~~)。
         * @example `Running`
         */
        Status: string;
        /**
         * 商品类型。
         * @example `drds_polarxpre_public_cn`
         */
        CommodityCode: string;
        /**
         * 过期时间。
         * @example `2021-12-01T16:00:00.000+0000`
         */
        ExpireTime: string;
        /**
         * 是否过期。
         * @example `false`
         */
        Expired: boolean;
        /**
         * 创建时间。
         * @example `2021-11-01T03:49:50.000+0000`
         */
        CreateTime: string;
        /**
         * 实例付费方式，取值：
         * - **Postpaid**：按量付费；
         * - **Prepaid**：包年包月。
         * @example `Prepaid`
         */
        PayType: string;
        /**
         * 锁定原因。
         * @example `欠费`
         */
        LockReason: string;
        /**
         * 数据库类型。
         * @example `polarx`
         */
        DBType: string;
        /**
         * 是否锁定。
         * @example `Unlock`
         */
        LockMode: string;
        /**
         * VPC ID。
         * @example `VPCID`
         */
        VPCId: string;
        /**
         * 当前内核版本。
         * @example `polarx-kernel_5.4.12-16349923_xcluster-20210926`
         */
        MinorVersion: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 网络类型。
         * @example `VPC`
         */
        Network: string;
        /**
         * 数据库版本。
         * @example `5.7`
         */
        DBVersion: string;
        /**
         * 数据库描述。
         * @example `测试`
         */
        Description: string;
        /**
         * 规格。
         * @example `polarx.x4.large.2e`
         */
        NodeClass: string;
        /**
         * 存储使用。
         * @example `40658534400`
         */
        StorageUsed: number;
        /**
         * 节点个数。
         * @example `5`
         */
        NodeCount: number;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-g`
         */
        ZoneId: string;
        /**
         * 引擎型号。
         * @example `polarx`
         */
        Engine: string;
        /**
         * 实例ID。
         * @example `pxc-hzr2yeov******`
         */
        Id: string;
        /**
         * 节点列表。
         */
        Nodes: {
            /**
             * 可用区ID。
             * @example `cn-hangzhou-g`
             */
            ZoneId: string;
            /**
             * 节点ID。
             * @example `pxi-zd89wrzqh******`
             */
            Id: string;
            /**
             * 实例规格。
             * @example `polarx.x4.large.2e`
             */
            ClassCode: string;
            /**
             * 区域ID。
             * @example `cn-hangzhou-g-aliyun`
             */
            RegionId: string;
        }[];
        /**
         * 只读实例列表。
         */
        ReadDBInstances: string[];
        /**
         * 列存只读实例信息。
         */
        ColumnarReadDBInstances: string[];
        /**
         * 资源组ID
         * @example `rg-xxxxxx`
         */
        ResourceGroupId: string;
        /**
         * 标签集合。
         */
        TagSet: {
            /**
             * 标签名称。
             * @example `key1`
             */
            Key: string;
            /**
             * 标签值。
             * @example `value1`
             */
            Value: string;
        }[];
        /**
         * 数据库实例名称。
         * @example `pxc-xxxxx`
         */
        DBInstanceName: string;
        /**
         * DN节点个数。
         * @example `2`
         */
        DnNodeCount: number;
        /**
         * CN节点个数。
         * @example `2`
         */
        CnNodeCount: number;
        /**
         * CN节点规格。
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
         * @example `polarx.x4.large.2e`
         */
        CnNodeClassCode: string;
        /**
         * DN节点规格。
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
         * @example `mysql.n4.medium.25`
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
         * 是否包含多流日志服务，取值如下：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        ContainBinlogX: boolean;
        /**
         * 当前实例是否支持多流，取值如下：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        SupportBinlogX: boolean;
        /**
         * 日志节点名称。
         * @example `pxc-c-dmlgit****`
         */
        CdcInstanceName: string;
        /**
         * 拓扑类型：
         * - **3azones**：三可用区；
         * - **1azone**：单可用区。
         * @example `3azones`
         */
        TopologyType: string;
        /**
         * 第三可用区。
         * @example `cn-hangzhou-k`
         */
        TertiaryZone: string;
        /**
         * 主可用区。
         * @example `cn-hangzhou-j`
         */
        PrimaryZone: string;
        /**
         * 次可用区。
         * @example `cn-hangzhou-l`
         */
        SecondaryZone: string;
        /**
         * 列存引擎实例名称。
         * @example `xxxxxxxx`
         */
        ColumnarInstanceName: string;
        isInGdn: boolean;
        gdnRole: string;
        CpuType: string;
    }[];
}
