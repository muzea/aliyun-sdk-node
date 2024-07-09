export interface ListSlbResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `b197-40ab-9155-7ca7`
     */
    RequestId: string;
    SlbList: {
        /**
         * SLB列表。
         */
        SlbEntity: {
            /**
             * SLB实例ID。
             * @example `lb-2ze055t3xv7s8****`
             */
            SlbId: string;
            /**
             * VPC网络ID。
             * @example `vpc-bp1f90rfybszjogyw****`
             */
            VpcId: string;
            /**
             * VPC交换机ID。
             * @example `vsw-bp156w1gpbv0o50hs****`
             */
            VswitchId: string;
            /**
             * SLB是否过期：
             * - true：已过期。
             * - false：未过期。
             * @example `false`
             */
            Expired: boolean;
            /**
             * 用户ID。
             * @example `edas_****_**st@aliyun-****.com`
             */
            UserId: string;
            /**
             * 地址类型：
             * - internet：公网地址。
             * - intranet：私网地址。
             * @example `internet`
             */
            AddressType: string;
            /**
             * 网络类型。
             * @example `classic`
             */
            NetworkType: string;
            /**
             * 地区ID。
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * EDAS资源组ID。
             * @example `0`
             */
            GroupId: number;
            /**
             * IP地址。
             * @example `39.176.XX.XX`
             */
            Address: string;
            /**
             * SLB名称。
             * @example `adce`
             */
            SlbName: string;
            /**
             * SLB状态。
             * @example `active`
             */
            SlbStatus: string;
            /**
             * 标签。
             * @example `[{"tagKey":"tag","tagValue":"value"}]`
             */
            Tags: string;
            /**
             * 是否允许K8s应用复用：
             * - true: 允许复用。
             * - false: 不允许复用。
             * @example `true`
             */
            Reusable: boolean;
        }[];
    };
}
