export interface GetApplicationResponse {
    /**
     * 请求失败原因
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `A07FFDF2-78FA-1B48-9E38-88E833A93187`
     */
    RequestId: string;
    /**
     * 应用详情
     */
    Data: {
        /**
         * 应用描述
         * @example `remark`
         */
        Description: string;
        /**
         * 数据库中图片地址
         * @example `https://cadt-studio-publish.oss-cn-hangzhou.aliyuncs.com/xxxxxxxxxxxxxxxxxxx/sr-8DWU4RUS49NIDII0.png`
         */
        ImageURL: string;
        /**
         * 应用ID
         * @example `VVK605ZH00OA4MRT`
         */
        ApplicationId: string;
        /**
         * 应用名
         * @example `CADT应用`
         */
        Name: string;
        /**
         * 应用关联模板ID
         * @example `FYS9VZ535U20V7HT`
         */
        TemplateId: string;
        /**
         * 应用创建时间
         * @example `2021-08-09 14:37:16`
         */
        CreateTime: string;
        /**
         * 应用所属资源组ID
         * @example `rg-aekzhfgmw4e6fwq`
         */
        ResourceGroupId: string;
        /**
         * 计费结果列表
         */
        PriceList: {
            /**
             * 产品code
             * @example `ecs`
             */
            ResourceCode: string;
            /**
             * 实例名
             * @example `ecs`
             */
            InstanceName: string;
            /**
             * 原价
             * @example `3.570`
             */
            OriginalPrice: number;
            /**
             * 单价
             * @example `0.01`
             */
            OnePrice: number;
            /**
             * 时长
             * @example `1`
             */
            Period: number;
            /**
             * 数量
             * @example `1`
             */
            Count: number;
            /**
             * 单位：<props="china">元/时</props>
             * <props="intl">USD/时</props>
             * @example `金额/时`
             */
            PriceUnit: string;
            /**
             * 总价
             * @example `0.01`
             */
            Price: number;
            /**
             * 支付类型
             * @example `PayAsYouGo`
             */
            ChargeType: string;
            /**
             * 区域
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 实例规格。
             * 返回实例规格信息，例如VPC返回网段信息“192.168.0.0/16”，ECS返回实例规格“ecs.g5.large”，SLB返回“slb.s1.small”等；如果该实例没有规格属性，则返回空。
             * @example `"slb.s1.small"
             "192.168.0.0/24"
            "ecs.c6.large"
            "normal"
             ""`
             */
            Specification: string;
            /**
             * 资源标记
             * @example `Create`
             */
            Lifecycle: string;
            /**
             * 询价失败时返回错误信息
             * @example `ecs售罄`
             */
            Remark: string;
            /**
             * 创建类型：
             * </br>新建-1
             * </br>导入-2
             * @example `1`
             */
            type: string;
        }[];
        /**
         * 校验结果列表
         */
        Checklist: {
            /**
             * 产品code
             * @example `vpc`
             */
            ResourceCode: string;
            /**
             * 实例名
             * @example `vpc`
             */
            ResourceName: string;
            /**
             * 区域
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 校验结果
             * @example `Finish`
             */
            Result: string;
            /**
             * 失败原因
             * @example `校验通过`
             */
            Remark: string;
            /**
             * 规格
             * @example `192.168.0.0/16`
             */
            Specification: string;
            /**
             * 资源标记
             * @example `Create`
             */
            Lifecycle: string;
        }[];
        /**
         * 应用状态
         * @example `Deployed_Success`
         */
        Status: string;
        /**
         * 资源列表
         */
        ResourceList: {
            /**
             * 资源部署结果
             * @example `Finish`
             */
            Status: string;
            /**
             * 产品code
             * @example `ecs`
             */
            ResourceCode: string;
            /**
             * 实例名称
             * @example `ecs`
             */
            ResourceName: string;
            /**
             * 实例ID
             * @example `i-2zehnzxqixu1pywsfbx1`
             */
            ResourceId: string;
            /**
             * 支付类型
             * @example `PayAsYouGo`
             */
            ChargeType: string;
            /**
             * 资源类型
             * @example `ecs`
             */
            ResourceType: string;
            /**
             * 部署结果
             * @example `{"hostName":"iZ2zehnzxqixu1pywsfbx1Z","memory":32768.0,"creationTime":"2021-09-28T11:23:46Z","instanceName":"ecs","internetMaxBandwidthOut":0.0,"description":"","clusterId":"","private_ip":"192.168.0.247","instanceId":"i-2zehnzxqixu1pywsfbx1","requestId":"F1C64344-3723-51A0-855B-5F08B5634323","zoneId":"cn-beijing-b","ioOptimized":"optimized","id":"i-2zehnzxqixu1pywsfbx1","instanceNetworkType":"vpc","instanceChargeType":"PostPaid","imageId":"centos_8_4_x64_20G_alibase_20210824.vhd","serialNumber":"cee246c4-38f3-4bf3-950b-c17e88ff6527","vlanId":"","instanceType":"ecs.e3.large","cpu":4.0,"creditSpecification":"","internetMaxBandwidthIn":-1.0,"expiredTime":"2099-12-31T15:59Z","internetChargeType":"PayByTraffic","regionId":"cn-beijing","refId":"79224644_0","stoppedMode":"Not-applicable","status":"Running"}`
             */
            Remark: string;
            /**
             * 资源标记
             * @example `Create`
             */
            Lifecycle: string;
        }[];
        /**
         * 失败原因
         * @example `Success`
         */
        Error: string;
    };
    /**
     * 响应码
     * @example `200`
     */
    Code: string;
}
