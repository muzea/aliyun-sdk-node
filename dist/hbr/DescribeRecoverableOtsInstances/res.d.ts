export interface DescribeRecoverableOtsInstancesResponse {
    /**
     * 请求ID。
     * @example `14DC089E-5DD3-5028-AEDB-93D78E11DB2A`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true表示成功。
     * - false表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 可恢复的表格存储实例和数据表列表。
     */
    OtsInstances: {
        /**
         * 可恢复的表格存储实例名称。
         * @example `instancename`
         */
        InstanceName: string;
        /**
         * 可恢复的表格存储数据表列表。
         */
        TableNames: string[];
    }[];
}
