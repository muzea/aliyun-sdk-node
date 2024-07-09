export interface DescribeWebLockBindListResponse {
    /**
     * 分页查询时，显示的当前页的页码。起始值为1，默认值为1。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D9354C1A-D709-4873-9AAE-41513327B247`
     */
    RequestId: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为20。
     * @example `20`
     */
    PageSize: number;
    /**
     * 网页防篡改绑定的服务器总数。
     * @example `11409`
     */
    TotalCount: number;
    /**
     * 已添加网页防篡改防护的服务器信息集合。
     */
    BindList: {
        /**
         * 当前服务器的防护状态。取值：
         * - **on**：已开启防护。
         * - **off**：已关闭防护。
         * @example `on`
         */
        Status: string;
        /**
         * 网页防篡改防护启动进度百分比。取值范围：0~100%。
         * @example `99`
         */
        Percent: number;
        /**
         * 当前服务器的公网IP地址。
         * @example `54.169.XX.XX`
         */
        InternetIp: string;
        /**
         * 网页防篡改服务异常状态详情。取值：
         * - **client offline**：客户端离线。
         * - **timeout**：连接超时。
         * @example `client offline`
         */
        ServiceDetail: string;
        /**
         * 当前服务器的操作系统类型。
         * @example `Linux`
         */
        Os: string;
        /**
         * 当前服务器的网页防篡改服务状态。取值：
         * - **stop**：防篡改服务未启动。
         * - **initializing**：防篡改服务启动中。
         * - **exception**：防篡改服务状态异常。
         * - **running**：防篡改服务运行中。
         * - **closing**：防篡改服务关闭中。
         * @example `stop`
         */
        ServiceStatus: string;
        /**
         * 当前服务器的私网IP地址。
         * @example `192.168.XX.XX`
         */
        IntranetIp: string;
        /**
         * 告警数量。
         * @example `2`
         */
        AuditCount: string;
        /**
         * 服务器的UUID。
         * @example `inet-12345****`
         */
        Uuid: string;
        /**
         * 网页防篡改服务状态异常错误码。取值：
         * - **2001**: 客户端离线。
         * - **9999**: 连接超时。
         * @example `2001`
         */
        ServiceCode: string;
        /**
         * 服务器名称。
         * @example `testName`
         */
        InstanceName: string;
        /**
         * 防护目录数。
         * @example `5`
         */
        DirCount: string;
        /**
         * 拦截数量。
         * @example `10`
         */
        BlockCount: string;
    }[];
}
