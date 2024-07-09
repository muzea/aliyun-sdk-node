export interface DescribeWebLockFileEventsResponse {
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `2`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `79CFF74D-E967-5407-8A78-EE03B925FDAA`
     */
    RequestId: string;
    /**
     * 分页查询时，显示每页数据的最大条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 网页防篡改事件的总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 网页防篡改事件列表。
     */
    List: {
        /**
         * 状态。取值：
         * -  **1**：未处理
         * - **2**：已忽略
         * - **4**：已下线
         * - **8**：误报
         * - **10**：已加入白名单
         * - **16**：处理中
         * - **32**：已防御
         * - **64**：已失效
         * - **128**：已删除
         * - **512**：自动处理
         * @example `1`
         */
        Status: string;
        /**
         * 网页防篡改事件名称。
         * @example `modify`
         */
        EventName: string;
        /**
         * 首次发生时间戳。
         * @example `1657178400000`
         */
        Ds: number;
        /**
         * 受影响资产实例的公网IP地址。
         * @example `8.210.XX.XX`
         */
        InternetIp: string;
        /**
         * 进程路径。
         * @example `C:\Windows\explorer.exe`
         */
        ProcessPath: string;
        /**
         * 资产的IP。
         * @example `8.210.XX.XX`
         */
        Ip: string;
        /**
         * 最新发生时间戳。
         * @example `1657178400000`
         */
        GmtEvent: number;
        /**
         * 尝试次数。
         * @example `10`
         */
        Count: number;
        /**
         * 当前资产的私网IP地址。
         * @example `172.25.XX.XX`
         */
        IntranetIp: string;
        /**
         * 进程名称。
         * @example `python3.7`
         */
        ProcessName: string;
        /**
         * 资产实例的UUID。
         * @example `49e25e0f-bb51-4a5a-a1b3-13a4ddaa****`
         */
        Uuid: string;
        /**
         * 防护模式。取值：
         * - **audit**：拦截模式。
         * - **web_lock**：告警模式。
         * @example `audit`
         */
        EventType: string;
        /**
         * 资产实例名称。
         * @example `sql-test-001`
         */
        InstanceName: string;
        /**
         * 状态。取值：
         * -  **1**：未处理
         * - **2**：已忽略
         * - **4**：已下线
         * - **8**：误报
         * - **10**：已加入白名单
         * - **16**：处理中
         * - **32**：已防御
         * - **64**：已失效
         * - **128**：已删除
         * - **512**：自动处理
         * @example `1`
         */
        EventStatus: string;
        /**
         * 文件路径。
         * @example `
        D:\test-tamper-proofing\123.html`
         */
        Path: string;
        /**
         * 紧急程度。取值：
         * **medium**：中危
         * @example `medium`
         */
        Level: string;
        /**
         * 事件编号。
         * @example `3555953980`
         */
        Id: number;
    }[];
}
