export interface DescribeLoginBaseConfigsResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2C2D4B3C-0524-17B1-93D2-DA50119F4E1E`
     */
    RequestId: string;
    /**
     * 分页查询时，每页显示的登录配置信息的数量。默认值为**20**，表示每页显示20条登录配置信息。
     * @example `20`
     */
    PageSize: number;
    /**
     * 查询到的登录配置信息的总数量。
     * @example `200`
     */
    TotalCount: number;
    /**
     * 登录配置信息的详情列表。
     */
    BaseConfigs: {
        /**
         * 常用登录时间的结束时间。
         * @example `07:00`
         */
        EndTime: string;
        /**
         * 常用登录账号。
         * @example `1582318****`
         */
        Account: string;
        /**
         * 常用登录时间的开始时间。
         * @example `08:00`
         */
        StartTime: string;
        /**
         * 常用登录IP。
         * @example `192.168.XX.XX`
         */
        Ip: string;
        /**
         * 服务器的总数量。
         * @example `172`
         */
        TotalCount: number;
        /**
         * 规则生效的服务器的数量。
         * @example `13`
         */
        UuidCount: number;
        /**
         * 常用登录地。
         * @example `BeiJing`
         */
        Location: string;
        /**
         * 规则生效的服务器的详细信息列表。
         */
        TargetList: {
            /**
             * 规则生效的服务器的UUID或者服务器其所在的分组ID。
             * @example `0011ea53-738c-4bff-93be-ce6a1cc9****`
             */
            Target: string;
            /**
             * 生效资产的选择模式。取值：
             * - **uuid**：按单个资产添加。
             * - **groupId**：按照服务器分组添加。
             * - **global**：表示选择所有资产。
             * @example `uuid`
             */
            TargetType: string;
        }[];
        /**
         * 对应配置备注显示的信息。
         * @example `test`
         */
        Remark: string;
    }[];
}
