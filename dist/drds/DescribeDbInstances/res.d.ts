export interface DescribeDbInstancesResponse {
    /**
     * 请求ID。
     * @example `293275B3-8FC0-4619-A26E-6F062FASD56R`
     */
    RequestId: string;
    Items: {
        /**
         * 实例详情列表。
         */
        DBInstance: {
            /**
             * 存储层实例网络类型，取值范围如下：
             * - **VPC**：专有网络
             * - **CLASSIC**：经典网络
             * @example `VPC`
             */
            InstanceNetworkType: string;
            /**
             * 存储层实例类型。
             * @example `Primary`
             */
            DBInstanceType: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-a`
             */
            ZoneId: string;
            /**
             * 存储层实例状态，取值范围如下：
             * - **0**：创建中
             * - **1**：使用中
             * - **3**：删除中
             * - **5**：重启中
             * - **6**：升降级中
             * - **7**：恢复中
             * - **8**：内外网切换中
             * @example `0`
             */
            DBInstanceStatus: number;
            /**
             * 存储层实例ID。
             * @example `rm-****************`
             */
            DBInstanceId: string;
            /**
             * 存储层实例内核。
             * @example `存储层实例内核。`
             */
            Engine: string;
            /**
             * 存储层实例描述。
             * @example `test`
             */
            DBInstanceDescription: string;
            /**
             * 存储层实例内核版本。
             * @example `5.7`
             */
            EngineVersion: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            ReadOnlyDBInstanceId: {
                /**
                 * 存储层实例下的只读实例。
                 */
                ReadOnlyDBInstanceId: string[];
            };
            AllowAllCategory: boolean;
        }[];
    };
}
