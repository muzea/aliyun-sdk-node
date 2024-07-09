export interface DescribeCurrentModifyOrderResponse {
    /**
     * 请求ID。
     * @example `C87415BE-F5AB-55A4-A60E-A0A329EAF2A4`
     */
    RequestId: string;
    /**
     * 变配订单
     */
    ModifyOrder: {
        /**
         * 实例ID
         * @example `rm-cn-nwy39qeys0003r`
         */
        DbInstanceId: string;
        /**
         * 变配目标规格
         * @example `mysql.x2.medium.2c`
         */
        TargetDBInstanceClass: string;
        /**
         * 存储描述信息
         * @example `20`
         */
        Storage: string;
        /**
         * 实例规格对应的内存容量。单位：GB。
         * @example `1024`
         */
        MemoryClass: string;
        /**
         * 实例规格对应的CPU核数。单位：个。
         * @example `8`
         */
        Cpu: string;
        /**
         * 规格族。
         * @example `x`
         */
        ClassGroup: string;
        /**
         * 生效时间，取值：
         * * **Immediate**（默认值）：立即生效。
         * * **MaintainTime**：在可运维时间段内生效，请参见[ModifyDBInstanceMaintainTime](~~610402~~)。
         * @example `MaintainTime`
         */
        EffectiveTime: string;
        /**
         * 任务状态。
         * @example `Succeed,Scheduled,Running,Cancelling,Canceled,Waiting`
         */
        Status: string;
        /**
         * 标记
         * @example `无`
         */
        Mark: string;
    }[];
}
