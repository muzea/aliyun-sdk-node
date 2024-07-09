export interface ListFileProtectPluginStatusResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `60F289EC-BAA3-5DF1-8476-B3F05A14EBC2`
     */
    RequestId: string;
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询结果的总数。
         * @example `149`
         */
        TotalCount: number;
    };
    /**
     * 接口调用成功时，返回的数据。
     */
    Data: {
        /**
         * 是否安装
         * @example `true`
         */
        Installed: boolean;
        /**
         * 客户端是否在线。取值：
         * - **true**：在线
         * - **false**：离线
         * @example `true`
         */
        Online: boolean;
        /**
         * 是否支持核心文件监控功能。
         * @example `true`
         */
        SupportFile: boolean;
        /**
         * 安装返回的信息。
         * 1. 0: 成功
         * 1. -2: 内核不支持
         * @example `-2`
         */
        InstallCode: string;
        /**
         * 安装返回的信息。
         * @example `driver file not exist`
         */
        InstallMessage: string;
        /**
         * 客户端版本。
         * @example `00_41`
         */
        ClientVersion: string;
        /**
         * 资产实例的UUID。
         * @example `6690a46c-0edb-4663-a641-3629d1a9****`
         */
        Uuid: string;
        /**
         * 关联实例的公网IP。
         * @example `172.16.XX.XX`
         */
        InternetIp: string;
        /**
         * 关联实例的私网IP。
         * @example `10.42.XX.XX`
         */
        IntranetIp: string;
        /**
         * 实例名称。
         * @example `i-wz92q7m5hsbgfhdss***`
         */
        InstanceName: string;
    }[];
}
