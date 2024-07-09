export interface DescribeCastersResponse {
    CasterList: {
        /**
         * 导播台信息列表。
         */
        Caster: {
            /**
             * 导播台ID。可作为查询导播台流地址、启动导播台、添加导播台视频资源、添加导播台布局、查询导播台布局列表、添加导播台组件和添加导播台节目单的请求参数。
             * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
             */
            CasterId: string;
            /**
             * 导播台名称。
             * @example `liveCaster****`
             */
            CasterName: string;
            /**
             * 导播台分辨率配置，付费类型为预付费时必选。
             * - lp_ld：流畅。
             * - lp_sd：标清。
             * - lp_hd：高清。
             * - lp_ud：超清。
             * - lp_ld_v：竖屏流畅。
             * - lp_sd_v：竖屏标清。
             * - lp_hd_v：竖屏高清。
             * - lp_ud_v：竖屏超清。
             * @example `lp_ld`
             */
            CasterTemplate: string;
            /**
             * 是否启用Channel。
             * - 0：不启用。
             * - 1：启用。
             * @example `1`
             */
            ChannelEnable: number;
            /**
             * 付费方式。
             * - PrePaid：预付费。
             * - PostPaid：后付费。
             * @example `PrePaid`
             */
            ChargeType: string;
            /**
             * 创建时间。
             * @example `2017-08-30 12:02:57.0`
             */
            CreateTime: string;
            /**
             * 时长。格式为：hh:mm:ss（时：分：秒）。
             * @example `1:02:33`
             */
            Duration: string;
            /**
             * 导播台过期时间。
             * @example `2018-08-30 12:02:57.0`
             */
            ExpireTime: string;
            /**
             * 对导播台最新修改时间。例如：近期有对导播台进行过开启，停止，修改配置等操作的时间。
             * @example `2021-12-01T05:08:45Z`
             */
            LastModified: string;
            /**
             * 导播台规格类型 。 取值：
             * - 0：播单型。
             * - 1：通用型。
             * @example `1`
             */
            NormType: number;
            /**
             * 导播台购买时间。
             * @example `2017-08-30 12:02:57.0`
             */
            PurchaseTime: string;
            /**
             * 导播台启动时间，当导播台处于导播中时输出。
             * @example `2017-08-30 18:02:57.0`
             */
            StartTime: string;
            /**
             * 状态。取值：
             * - 0：空闲。
             * - 1：导播中。
             * @example `1`
             */
            Status: number;
        }[];
    };
    /**
     * 请求ID。
     * @example `5c6a2a0df228-4a64- af62-20e91b9676b3`
     */
    RequestId: string;
    /**
     * 导播台数量。
     * @example `1`
     */
    Total: number;
}
