export interface DescribeContactPointsResponse {
    /**
     * 请求ID。
     * @example `467F786B-C765-40C4-8493-89F4CE95F1B6`
     */
    RequestId: string;
    ContactPoints: {
        /**
         * 集群连接信息集合。
         */
        ContactPoint: {
            /**
             * CQL端口。
             * @example `9042`
             */
            Port: number;
            /**
             * 数据中心ID。
             * @example `cn-hangzhou-g`
             */
            DataCenterId: string;
            PublicAddresses: {
                PublicAddress: string[];
            };
            PrivateAddresses: {
                PrivateAddress: string[];
            };
        }[];
    };
}
