export interface DescribeInstancesResponse {
    /**
     * 返回的业务码，正常成功为0。
     * @example `0`
     */
    Code: number;
    /**
     * 输入时设置的每页行数。
     * @example `60`
     */
    PageSize: number;
    /**
     * 实例列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 查询到的实例总数。
     * @example `2`
     */
    TotalCount: number;
    Instances: {
        /**
         * 由InstanceAttributesType组成的数组格式，返回实例的信息。
         */
        Instance: {
            /**
             * 实例创建时间。按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2019-07-26T06:40:43Z`
             */
            CreationTime: string;
            /**
             * 状态。取值：
             * - Running：运行中。
             * - Expired：已过期。
             * - Stopped：已停止。
             * @example `Running`
             */
            Status: string;
            /**
             * 实例规格代码。
             * @example `ens.sn1.stiny`
             */
            SpecName: string;
            /**
             * 实例规格簇。取值：
             * - x86_vm：X86计算
             * - x86_pm：X86裸机
             * - x86_bmi：X86裸金属
             * - x86_bm：智能网卡裸金属
             * - pc_bmi：异构裸金属
             * - pc_vm：异构虚机
             * - arm_bmi：ARM计算
             * @example `x86_vm`
             */
            InstanceTypeFamily: string;
            /**
             * 实例类型。取值：
             * - EnsInstance：单独购买实例。
             * - EnsService：边缘服务实例。
             * - BuildMachine：镜像构建机。
             * - EnsPostPaidInstance：单独购买后付费。
             * @example `EnsService`
             */
            InstanceResourceType: string;
            /**
             * 实例主机名称。
             * - 点号（.）和短横线（-）不能作为首尾字符，更不能连续使用。
             * - Windows实例：字符长度为2~15，不支持点号（.），不能全是数字。允许大小写英文字母、数字和短横线（-）。
             * - 其他类型实例（Linux等）：字符长度为2~64，支持多个点号（.），点之间为一段，每段允许大小写英文字母、数字和短横线（-）。
             * @example `testHostName`
             */
            HostName: string;
            /**
             * 实例ID。
             * @example `i-instanc****`
             */
            InstanceId: string;
            /**
             * 最大下行带宽，单位：Mbps。
             * @example `40`
             */
            InternetMaxBandwidthIn: number;
            /**
             * 最小上行带宽，单位：Mbps。
             * @example `100`
             */
            InternetMaxBandwidthOut: number;
            /**
             * 实例所属地域ID。
             * @example `cn-hangzhou-telecom`
             */
            EnsRegionId: string;
            /**
             * Vcpu核数。
             * @example `2`
             */
            Cpu: string;
            /**
             * 过期时间。按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2119-07-13T02:38:57Z`
             */
            ExpiredTime: string;
            /**
             * 实例名称。
             * @example `i-5itef0f28t17bcdw9deu6meub`
             */
            InstanceName: string;
            /**
             * 磁盘总大小。单位：MiB。
             * @example `71680`
             */
            Disk: number;
            /**
             * 镜像名称。
             * @example `centos 6.8 x86_64`
             */
            OSName: string;
            /**
             * 内存大小，单位：MB。
             * @example `2048`
             */
            Memory: number;
            /**
             * 镜像ID。
             * @example `m-****`
             */
            ImageId: string;
            DataDisk: {
                /**
                 * 数据盘返回信息。
                 */
                DataDisk: {
                    /**
                     * Category的扩展字段。取值：
                     * - **file**：本地盘。
                     * - **pangu**：高效云盘。
                     * - **local_hdd**：本地HDD。
                     * @example `pangu`
                     */
                    device_type: string;
                    /**
                     * 云盘或本地盘类型。取值：
                     * **system**：系统盘。
                     * **data**：数据盘。
                     * @example `system`
                     */
                    disk_type: string;
                    /**
                     * 磁盘大小，单位：MiB。
                     * @example `51200`
                     */
                    Size: number;
                    /**
                     * 磁盘名称。
                     * @example `DiskName`
                     */
                    DiskName: string;
                    /**
                     * UUID。
                     * @example `5431f898-1323-4e64-8ce1-6cad50ed****`
                     */
                    uuid: string;
                    /**
                     * 磁盘容量，单位：MiB。
                     * @example `20480`
                     */
                    storage: number;
                    /**
                     * 磁盘ID。
                     * @example `d-5ip4c2dhmas0vjd5u1r****`
                     */
                    DiskId: string;
                    /**
                     * 云盘或本地盘种类。取值：
                     * - **file**：本地盘。
                     * - **pangu**：高效云盘。
                     * - **local_hdd**：本地HDD。
                     * @example `file`
                     */
                    Category: string;
                    /**
                     * 磁盘名称。
                     * @example `name`
                     */
                    name: string;
                    /**
                     * 磁盘大小。单位：GiB。
                     * @example `100`
                     */
                    DiskSize: number;
                }[];
            };
            PublicIpAddresses: {
                /**
                 * 公网返回信息。
                 */
                PublicIpAddress: {
                    /**
                     * ip信息。
                     * @example `119.147.xx.xx`
                     */
                    Ip: string;
                    /**
                     * 网关。
                     * @example `119.147.xx.xx`
                     */
                    GateWay: string;
                    /**
                     * 运营商信息。
                     * @example `unicom`
                     */
                    Isp: string;
                }[];
            };
            PrivateIpAddresses: {
                /**
                 * 实例私网返回信息。
                 */
                PrivateIpAddress: {
                    /**
                     * ip信息。
                     * @example `119.147.xx.xx`
                     */
                    Ip: string;
                    /**
                     * 网关。
                     * @example `119.147.xx.xx`
                     */
                    GateWay: string;
                    /**
                     * 运营商信息。
                     * @example `cmcc`
                     */
                    Isp: string;
                }[];
            };
            SecurityGroupIds: {
                /**
                 * 安全组ID。
                 */
                SecurityGroupId: string[];
            };
            InnerIpAddress: {
                /**
                 * 实例的内网IP地址。
                 */
                IpAddress: string[];
            };
            PublicIpAddress: {
                /**
                 * 公网地址。
                 */
                IpAddress: string[];
            };
            /**
             * 磁盘返回信息。
             */
            SystemDisk: {
                /**
                 * Category的扩展字段。取值：
                 * - **file**：本地盘。
                 * - **pangu**：高效云盘。
                 * - **local_hdd**：本地HDD。
                 * @example `pangu`
                 */
                device_type: string;
                /**
                 * 云盘或本地盘类型。取值：
                 * - **system**：系统盘。
                 * - **data**：数据盘。
                 * @example `system`
                 */
                disk_type: string;
                /**
                 * 磁盘大小，单位：MiB。
                 * @example `51200`
                 */
                Size: number;
                /**
                 * 磁盘名称。
                 * @example `DiskName`
                 */
                DiskName: string;
                /**
                 * UUID。
                 * @example `5431f898-1323-4e64-8ce1-6cad50ed****`
                 */
                uuid: string;
                /**
                 * 磁盘容量，单位：MiB。
                 * @example `20480`
                 */
                storage: number;
                /**
                 * 磁盘ID。
                 * @example `d-5ip4c2dhmas0rn7rt0p9****`
                 */
                DiskId: string;
                /**
                 * 云盘或本地盘种类。取值：
                 * - **file**：本地盘。
                 * - **pangu**：高效云盘。
                 * - **local_hdd**：本地HDD。
                 * @example `file`
                 */
                Category: string;
                /**
                 * 磁盘名称。
                 * @example `DiskName`
                 */
                name: string;
            };
            /**
             * 网络返回信息。
             */
            NetworkAttributes: {
                /**
                 * 网络ID。
                 * @example `n-2zeuphj08tt7q3brd****`
                 */
                NetworkId: string;
                /**
                 * 交换机ID。
                 * @example `vsw-2zeh0r1pabwtg6wcs****`
                 */
                VSwitchId: string;
                PrivateIpAddress: {
                    /**
                     * 实例私网返回信息。
                     */
                    IpAddress: string[];
                };
            };
            Tags: {
                /**
                 * 实例的标签集合。
                 * ><notice>此接口暂时不支持标签信息返回，可结合“标签”目录下的API进行组合使用</notice>
                 */
                Tags: {
                    /**
                     * 标签值
                     * @example `value1`
                     */
                    TagValue: string;
                    /**
                     * 实例的标签键。
                     * @example `key1`
                     */
                    TagKey: string;
                }[];
            };
            /**
             * 自动释放时间。
             * @example `2023-06-28T14:38:52Z`
             */
            AutoReleaseTime: string;
            /**
             * 抢占式实例策略。
             * @example `NoSpot`
             */
            SpotStrategy: string;
        }[];
    };
}
