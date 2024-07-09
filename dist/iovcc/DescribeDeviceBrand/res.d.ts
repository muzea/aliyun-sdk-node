export interface DescribeDeviceBrandResponse {
    /**
     * 请求ID。
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    DeviceBrand: {
        /**
         * 品牌ID
         * @example `1`
         */
        DeviceBrandId: number;
        /**
         * 品牌描述
         * @example `天猫精灵品牌`
         */
        Description: string;
        /**
         * 项目ID
         * @example `projectTest`
         */
        ProjectId: string;
        /**
         * 生产厂商
         * @example `Alibaba`
         */
        Manufacture: string;
        /**
         * 品牌名称
         * @example `天猫精灵`
         */
        DeviceBrand: string;
    };
}
