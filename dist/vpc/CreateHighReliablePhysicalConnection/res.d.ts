export interface CreateHighReliablePhysicalConnectionResponse {
    PhysicalConnectionList: {
        /**
         * 物理专线实例列表。
         */
        physicalConnectionList: {
            /**
             * 物理专线实例ID。
             * @example `pc-j5e5qqo616p81ncsp****`
             */
            InstanceId: string;
            /**
             * 物理专线实例对应的地域ID
             * @example `cn-shanghai`
             */
            RegionNo: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    ErrorInfoList: {
        /**
         * dryrun不通过的时候，返回的错误码和错误信息，会返回所有的错误信息，主要包括：
         * - `pconn.high.reliable.dryrun.error.disable.outbound.data.transfer.billing`：用户没有开通出云流量费。
         * - `pconn.high.reliable.dryrun.error.incompatable.device.capacity`：用户选择的接入点没有设备符合设备高级能力。
         * - `pconn.high.reliable.dryrun.error.quota.exceeded`：用户的quota不足。
         * - `pconn.high.reliable.dryrun.error.not.enough.resource`：接入点资源不足。
         */
        errorInfoList: {
            /**
             * 错误码。
             * @example `pconn.high.reliable.dryrun.error.disable.outbound.data.transfer.billing`
             */
            ErrorCode: string;
            /**
             * 错误信息。
             * @example `pconn.high.reliable.dryrun.error.disable.outbound.data.transfer.billing`
             */
            ErrorMessage: string;
            /**
             * 物理专线实例ID。
             * @example `pc-j5e5qqo616p81ncsp****`
             */
            InstanceId: string;
        }[];
    };
}
