export interface DescribeRestoreOrderResponse {
    /**
     * 当前API是否请求成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `0AD2DE5D-B86B-40B5-9678-487D37******`
     */
    RequestId: string;
    /**
     * 返回数据对象。
     */
    RestoreOrderDO: {
        DrdsOrderDOList: {
            /**
             * 恢复的订单信息。
             */
            DrdsOrderDOList: {
                /**
                 * 专有网络ID。
                 * @example `vpc-*******************`
                 */
                VpcId: string;
                /**
                 * 网络类型，取值范围如下：
                 * * **classic**：经典网络
                 * * **vpc**：专有网络
                 * @example `vpc`
                 */
                Network: string;
                /**
                 * 专有网络交换机ID。
                 * @example `vsw-*******************`
                 */
                VSwtichId: string;
                /**
                 * 实例规格。
                 * @example `4C8G * 2`
                 */
                InstSpec: string;
                /**
                 * 可用区ID。
                 * @example `cn-hangzhou-e`
                 */
                AzoneId: string;
                /**
                 * 地域ID。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
            }[];
        };
        RdsOrderDOList: {
            /**
             * 恢复的RDS订单信息。
             */
            RdsOrderDOList: {
                /**
                 * 网络类型，取值范围如下：
                 * * **classic**：经典网络
                 * * **vpc**：专有网络
                 * @example `VPC`
                 */
                Network: string;
                /**
                 * 版本号。
                 * @example `5.6`
                 */
                Version: string;
                /**
                 * 实例规格。
                 * @example `rds.mysql.s2.large`
                 */
                InstanceClass: string;
                /**
                 * 磁盘容量。
                 * @example `10240`
                 */
                DbInstanceStorage: string;
                /**
                 * 数量。
                 * @example `1`
                 */
                Num: number;
                /**
                 * 存储引擎。
                 * @example `MYSQL`
                 */
                Engine: string;
                /**
                 * 可用区ID。
                 * @example `cn-hangzhou-g`
                 */
                AzoneId: string;
                /**
                 * 地域ID。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
            }[];
        };
        PolarOrderDOList: {
            /**
             * 恢复的PolarDB订单信息。
             */
            PolarOrderDOList: {
                /**
                 * 网络类型，取值范围如下：
                 * * **classic**：经典网络
                 * * **vpc**：专有网络
                 * @example `VPC`
                 */
                Network: string;
                /**
                 * 版本号。
                 * @example `5.6`
                 */
                Version: string;
                /**
                 * 实例规格
                 * @example `polar.mysql.x4.large`
                 */
                InstanceClass: string;
                /**
                 * 磁盘容量。
                 * @example `10240`
                 */
                DbInstanceStorage: string;
                /**
                 * 数量。
                 * @example `1`
                 */
                Num: number;
                /**
                 * PolarDB存储引擎。
                 * @example `POLARDB`
                 */
                Engine: string;
                /**
                 * 可用区ID。
                 * @example `cn-hangzhou-g`
                 */
                AzoneId: string;
                /**
                 * 地域ID。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
            }[];
        };
    };
}
