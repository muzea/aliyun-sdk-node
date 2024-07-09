export interface DescribeRenderingInstanceResponse {
    /**
     * 请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 云应用服务实例ID
     * @example `render-9f8c57355d224ad7beaf95e145f22111`
     */
    RenderingInstanceId: string;
    /**
     * 实例创建时间
     * @example `2024-05-07T02:27:06Z`
     */
    CreationTime: string;
    /**
     * 系统信息，包括分辨率等
     */
    SystemInfo: {
        /**
         * 分辨率。取值：
         * - 1920*864
         * - 1080*1920
         * - 1920*1080
         * - 720*1280
         * - 2400*1080
         * - 1080*2400
         * - 1280*720
         * - 864*1920
         * @example `1920*1080`
         */
        Resolution: string;
        /**
         * 实例刷新率，单位HZ
         * @example `60`
         */
        Frequency: number;
    };
    /**
     * 实例操作状态
     */
    RenderingStatus: {
        /**
         * 实例操作状态，取值范围，
         * 1. Preparing：初始化准备中
         * 2. Rebooting：重启中
         * 3. Resetting：重置中
         * 4. Working：工作中，属于终态
         * 5. Failure：操作失败，属于终态
         * @example `Working`
         */
        Status: string;
        /**
         * 实例最近一次操作动作名
         * @example `MigrateLocalData`
         */
        LatestAction: string;
        /**
         * 状态描述
         * @example `工作中`
         */
        Description: string;
    };
    /**
     * 实例配置信息
     */
    ConfigInfo: {
        /**
         * 出/入方向带宽限速。单位Mb/s。
         */
        NetworkConfig: {
            /**
             * 入方向最大限流，单位Mb/s。0表示无限流配置
             * @example `100`
             */
            MaxIngressBandwidth: number;
            /**
             * 出方向最大限流，单位Mb/s。0表示无限流配置
             * @example `100`
             */
            MaxEgressBandwidth: number;
            /**
             * 带宽生效状态，取值：
             * 1. waiting：生效中
             * 2. success：已生效
             * 3. failed：生效失败
             * @example `success`
             */
            BandwidthStatus: string;
            /**
             * 更新时间
             * @example `2023-08-17T09:54:35Z`
             */
            UpdateTime: string;
        };
        /**
         * 已配置的真机仿真模块信息列表
         */
        Configuration: {
            /**
             * 真机仿真功能模块名，取值范围包括，
             * 1. ctl：控制模块
             * 2. prop：属性模块
             * 3. location：定位模块
             * 4. battery：电池模块
             * 5. network：网络模块
             * 6. bluetooth：蓝牙模块
             * 7. sim：SIM卡模块
             * 8. display：设备模块
             * 9. system：基础模块
             * @example `location`
             */
            ModuleName: string;
            /**
             * 属性列表
             */
            Attributes: {
                /**
                 * 属性名
                 * @example `lon`
                 */
                Name: string;
                /**
                 * 属性值
                 * @example `100`
                 */
                Value: any;
            }[];
        }[];
    };
    /**
     * 云应用服务实例域名/出口IP
     * @example `cn-xxx.ecr.aliyuncs.com`
     */
    Hostname: string;
    /**
     * 端口映射信息列表
     */
    PortMappings: {
        /**
         * 外网端口或端口段，如22。若为端口段，以正斜线（/）隔开起始端口，例如 10/20。
         * @example `10013/10020`
         */
        ExternalPort: string;
        /**
         * 内网端口或端口段，端口与外网端口一一对应。若为端口段，以正斜线（/）隔开起始端口，例如 10/20。
         * @example `49008/49015`
         */
        InternalPort: string;
    }[];
}
