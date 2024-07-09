export interface ListInstanceSpecsResponse {
    /**
     * 请求ID。
     * @example `10D5E615-69F7-5F49-B850-00169ADE513C`
     */
    requestId: string;
    /**
     * 实例规格列表。
     */
    result: {
        /**
         * 核数。
         * @example `1`
         */
        cpu: number;
        /**
         * 内存，单位：G。
         * @example `16`
         */
        mem: number;
        /**
         * 单数据节点存储空间最小值，单位：G。
         * @example `100`
         */
        minDisk: number;
        /**
         * 单数据节点存储空间最大值，单位：G。
         * @example `600`
         */
        maxDisk: number;
    }[];
}
