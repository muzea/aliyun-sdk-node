export interface DescribePresetsResponse {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    Id: string;
    /**
     * 请求ID。
     * @example `9FE0CA83-BFD3-4EBD-A429-FABB9B9AE772`
     */
    RequestId: string;
    /**
     * 预置位列表。
     */
    Presets: {
        /**
         * 预置位名称。
         * @example `预置位2`
         */
        Name: string;
        /**
         * 预置位ID。
         * @example `2`
         */
        Id: string;
    }[];
}
