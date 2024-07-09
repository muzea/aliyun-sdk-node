export interface DescribeApmResponse {
    /**
     * 请求ID。
     * @example `97597D87-8066-5493-B692-5C50DA236D68`
     */
    RequestId: string;
    /**
     * 请求结果。
     */
    Result: {
        /**
         * 实例域名。
         * @example `apm-cn-i7m2fuae****.apm.elasticsearch.aliyuncs.com:8200`
         */
        apmServerDomain: string;
        /**
         * 创建时间。
         * @example `2021-11-16T07:15:51.967Z`
         */
        createdAt: string;
        /**
         * 已发布的副本数。
         * @example `1`
         */
        deployedReplica: number;
        /**
         * 实例名称。
         * @example `APMtest`
         */
        description: string;
        /**
         * 实例到期时间。
         * @example `4792752000000`
         */
        endTime: number;
        /**
         * 实例ID。
         * @example `apm-cn-i7m2fuae****`
         */
        instanceId: string;
        /**
         * 节点数。
         * @example `1`
         */
        nodeAmount: number;
        /**
         * 关联的Elasticsearch实例。
         * @example `es-cn-i7m2fsfhc001x****`
         */
        outputES: string;
        /**
         * 关联的Elasticsearch实例的用户名。
         * @example `elastic`
         */
        outputESUserName: string;
        /**
         * 用户账号ID。
         * @example `133071096032****`
         */
        ownerId: string;
        /**
         * 付费方式，取值如下：
         * - postpaid：按量付费。
         * - prepaid：包年包月。
         * @example `postpaid`
         */
        paymentType: string;
        /**
         * 地域。
         * @example `cn-hangzhou`
         */
        region: string;
        /**
         * 副本数。
         * @example `1`
         */
        replica: number;
        /**
         * 规格，取值如下：
         * - C1M2（1核2 GB）
         * - C2M4（2核4 GB）
         * @example `C1M2`
         */
        resourceSpec: string;
        /**
         * 生命周期状态，取值如下：
         * - CREATING：创建中。
         * - ACTIVATING：生效中。
         * - ACTIVE：正常。
         * - INACTIVE：冻结。
         * - INVALID：失效。
         * @example `active`
         */
        status: string;
        /**
         * 版本信息。
         * @example `7.10.2`
         */
        version: string;
        /**
         * 专有网络ID。
         * @example `vpc-bp1530vdhqkamm9s0****`
         */
        vpcId: string;
        /**
         * 交换机所在的可用区。
         * @example `cn-hangzhou-i`
         */
        vsArea: string;
        /**
         * 交换机ID。
         * @example `vsw-bp1j1mql6r9g5vfb4****`
         */
        vswitchId: string;
    };
}
