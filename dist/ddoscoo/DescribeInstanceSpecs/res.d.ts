export interface DescribeInstanceSpecsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4E3A9B5F-5DDB-593D-A1E6-F1F451DB5E0B`
     */
    RequestId: string;
    /**
     * DDoS高防实例的规格配置列表。
     */
    InstanceSpecs: {
        /**
         * 基础防护带宽。单位：Gbps。
         * @example `30`
         */
        BaseBandwidth: number;
        /**
         * 正常业务QPS。
         * @example `3000`
         */
        QpsLimit: number;
        /**
         * 正常业务带宽。单位：Mbps。
         * @example `100`
         */
        BandwidthMbps: number;
        /**
         * 弹性业务带宽。单位：Mbps。
         * @example `300`
         */
        ElasticBw: number;
        /**
         * 本月可用高级防护的次数。**-1**表示无限次。
         * > 只有当请求参数**RegionId**为**ap-southeast-1**（表示查询DDoS高防非中国内地实例）时，才会返回该参数。
         * @example `2`
         */
        DefenseCount: number;
        /**
         * 实例可防护站点的数量。
         * @example `5`
         */
        SiteLimit: number;
        /**
         * 实例可防护端口的数量。
         * @example `50`
         */
        PortLimit: number;
        /**
         * 弹性防护带宽。单位：Gbps。
         * @example `30`
         */
        ElasticBandwidth: number;
        /**
         * 实例的功能套餐类型。取值：
         * - **default**：表示标准功能套餐。
         * - **enhance**：表示增强功能套餐。
         * - **cnhk**：表示加速线路。
         * - **cnhk_default**：表示安全加速线路标准功能。
         * - **cnhk_enhance**：表示安全加速线路增强功能。
         * @example `default`
         */
        FunctionVersion: string;
        /**
         * 实例ID。
         * @example `ddoscoo-cn-zvp2eibz****`
         */
        InstanceId: string;
        /**
         * 实例可防护域名的数量。
         * @example `50`
         */
        DomainLimit: number;
        /**
         * 实例的弹性业务带宽的计费模式。取值：
         * - **day**：表示日95计费模式。
         * - **month**：表示月95计费模式。
         * @example `day`
         */
        ElasticBwModel: string;
        /**
         * 实例的新建连接数规格。
         * @example `5000`
         */
        CpsLimit: number;
        /**
         * 实例的并发连接数规格。
         * @example `100000`
         */
        ConnLimit: number;
        /**
         * 实例业务带宽限速值。取值：0～15360，0表示不限速。单位：mbps。
         * @example `0`
         */
        RealLimitBw: number;
        /**
         * 实例的弹性QPS的计费模式。取值：
         * - **day**：表示日95计费模式。
         * - **month**：表示月95计费模式。
         * @example `day`
         */
        ElasticQpsMode: string;
        /**
         * 弹性QPS。单位：Qps。
         * @example `10`
         */
        ElasticQps: number;
    }[];
}
