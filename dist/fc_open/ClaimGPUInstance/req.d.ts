export interface ClaimGPUInstanceRequest {
    /**
     * GPU渲染实例配置。
     */
    "body"?: {
        /**
         * GPU渲染实例规格。
         * @example `ecs.gn7i-c8g1.2xlarge`
         */
        instanceType: string;
        /**
         * GPU渲染实例镜像ID。
         * @example `m-foobar`
         */
        imageId: string;
        /**
         * GPU渲染实例安全组开放的TCP协议端口范围。
         */
        tcpPortRange: string[];
        /**
         * GPU渲染实例安全组开放的UDP协议端口范围。
         */
        udpPortRange: string[];
        /**
         * GPU渲染实例源端IPv4 CIDR地址块。
         * @example `0.0.0.0/0`
         */
        sourceCidrIp: string;
        /**
         * GPU渲染实例磁盘性能级别。
         * @example `PL0`
         */
        diskPerformanceLevel: string;
        /**
         * GPU渲染实例密码。
         * @example `MyPassword`
         */
        password: string;
        /**
         * GPU渲染实例公网出向带宽。
         * @example `100`
         */
        internetBandwidthOut: string;
        /**
         * GPU渲染实例系统盘空间。单位为GB。
         * @example `100`
         */
        diskSizeGigabytes: string;
        /**
         * 专有网络ID。
         * @example `v-xxxx`
         */
        vpcId: string;
        /**
         * 交换机ID。
         * @example `vsw-xxxx`
         */
        vswId: string;
        /**
         * 安全组ID。
         * @example `sg-xxxx`
         */
        sgId: string;
        /**
         * 用户角色。
         * @example `acs:ram::1234567890:role/fc-test`
         */
        role: string;
    };
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Sat, 14 Jul 2017 07:02:38 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `test-trace-id`
     */
    "X-Fc-Trace-Id"?: string;
}
