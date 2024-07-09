export interface DescribeRestoreJobsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0ED92280-4363-57D3-A4D3-4D3FBC99B29F`
     */
    RequestId: string;
    /**
     * 页面上显示的查询结果信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的恢复任务的数量。默认值为**10**，表示每页显示10条恢复任务。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询到的恢复任务的总数量。
         * @example `69`
         */
        TotalCount: number;
        /**
         * 查询到的当前结果页面中恢复任务的条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 恢复任务的详细信息。
     */
    RestoreJobs: {
        /**
         * 数据备份的状态。 取值：
         * - **RUNNING**：恢复任务执行中
         * - **COMPLETE**：恢复任务已完成
         * - **FAILED**：恢复任务执行失败
         * - **CANCELIN**G：恢复任务取消中
         * - **CANCELED**：恢复任务已取消
         * - **PARTIAL_COMPLETE**：恢复任务部分成功
         * - **CREATED**：恢复任务已创建，但尚未开始启动
         * - **EXPIRED**：恢复任务未更新
         * - **QUEUED**：恢复任务在等待启动中
         * - **CLIENT_DELETED**：防勒索客户端已被删除，任务执行失败
         * @example `COMPLETE`
         */
        Status: string;
        /**
         * 备份服务器数据时，存储备份数据的快照Hash值。
         * @example `a3992de83f529b844135fe795d949181735a7d20e0ac8539485c61b7983e618f`
         */
        SnapshotHash: string;
        /**
         * 生成备份数据的防勒索客户端的ID。
         * @example `c-000gmcypy5dyf9ey3uv7`
         */
        SourceClientId: string;
        /**
         * 恢复任务失败的CSV文件下载的URL。
         * @example `["/home/user"]`
         */
        ErrorFileUrl: string;
        /**
         * 恢复文件原所在的目录。该目录是在创建防勒索防护策略时指定的，即需要防护的目录。
         * @example `["/root/disk-uuid-test","/root/install.sh"]`
         */
        Includes: string;
        /**
         * 恢复任务的名称。
         * @example `Restore`
         */
        RestoreName: string;
        /**
         * 恢复数据的服务器的公网IP地址。
         * @example `1.1.XX.XX`
         */
        InternetIp: string;
        /**
         * 备份数据存入的仓库的ID。
         * @example `v-000b0v0jqzmse2yz06zw`
         */
        VaultId: string;
        /**
         * 备份文件的大小，单位为Bytes。
         * @example `20`
         */
        ActualBytes: number;
        /**
         * 错误码消息。
         * @example `successful`
         */
        Message: string;
        /**
         * 恢复任务的进度百分比。
         * @example `100`
         */
        Percentage: number;
        /**
         * 恢复任务更新的时间。
         * @example `2021-04-25T19:11Z`
         */
        GmtModified: string;
        /**
         * 恢复文件的类型。取值：
         * - **ECS_FILE**：来自云服务器ECS的文件
         * - **FILE**：来自本地主机文件
         * @example `ECS_FILE`
         */
        RestoreType: string;
        /**
         * 恢复任务的返回值。
         * @example `0`
         */
        ExitCode: string;
        /**
         * 恢复任务客户端的ID。
         * @example `c-000frxwusjauhp9ajpu6`
         */
        ClientId: string;
        /**
         * 成功恢复的文件的数量。
         * @example `0`
         */
        ItemsDone: number;
        /**
         * 需要恢复的数据总量，单位为Bytes。
         * @example `20`
         */
        BytesTotal: number;
        /**
         * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
         * @example `0ED92280-4363-57D3-A4D3-4D3FBC99B29F`
         */
        RequestId: string;
        /**
         * 需要恢复数据的服务器的名称。
         * @example `win2012-01`
         */
        InstanceName: string;
        /**
         * 恢复任务的完成时间戳，单位为毫秒。
         * @example `1583289054000`
         */
        CompleteTime: number;
        /**
         * 恢复任务的错误码。
         * @example `NONE`
         */
        ErrorType: string;
        /**
         * 服务器数据的恢复版本（即备份版本）。
         * @example `2020-03-03 18:00`
         */
        SnapshotVersion: string;
        /**
         * 备份数据存储的目标文件夹。创建恢复任务后，备份数据会恢复至该文件夹中。
         * @example `/home`
         */
        Target: string;
        /**
         * 恢复任务的创建时间戳，单位为毫秒。
         * @example `1583289052000`
         */
        CreatedTime: number;
        /**
         * 需要恢复数据的服务器的实例ID。
         * @example `i-bp12xnvdax6307gw****`
         */
        InstanceId: string;
        /**
         * 恢复内容。
         * @example `["/home/admin","\\\\servername\\sharename"]`
         */
        Source: string;
        /**
         * 需要恢复数据的服务器的内网IP地址。
         * @example `2.1.XX.XX`
         */
        IntranetIp: string;
        /**
         * 恢复失败的文件列表的CSV文件名称。
         * @example `s-000f4wxm8f7gur6g2otm.csv`
         */
        ErrorFile: string;
        /**
         * 需要恢复备份数据的服务器的UUID。
         * @example `6E3DABB6-3F6A-40DB-9492-2C8B59C****`
         */
        Uuid: string;
        /**
         * 恢复文件中所排除的目录。该目录是在创建防勒索防护策略时指定的，即无需防护的目录。
         * @example `["/home/user"]`
         */
        Excludes: string;
        /**
         * 数据恢复的速度，单位为Byte/s。
         * @example `25766558`
         */
        Speed: number;
        /**
         * 备份服务器数据时，存储备份数据的快照Hash值ID。
         * @example `s-000gmcypy5dy54e39yny`
         */
        SnapshotId: string;
        /**
         * 备份任务最后更新的时间戳，单位为毫秒。
         * @example `1583289054000`
         */
        UpdatedTime: number;
        /**
         * 恢复任务的ID。
         * @example `r-000gmcypy5dyf9ey3uv7`
         */
        RestoreId: string;
        /**
         * 恢复任务创建的时间。
         * @example `2021-04-25T19:11Z`
         */
        GmtCreate: string;
        /**
         * 进行中的恢复任务的预计完成时间戳，单位为秒。
         * @example `1583299054`
         */
        Eta: number;
        /**
         * 恢复任务的持续时间，单位为秒。
         * @example `100`
         */
        Duration: number;
        /**
         * 报错的恢复任务的数量。
         * @example `0`
         */
        ErrorCount: number;
        /**
         * 需要恢复的文件的总数量。
         * @example `0`
         */
        ItemsTotal: number;
        /**
         * 成功恢复的数据总量，单位为Bytes。
         * @example `20`
         */
        BytesDone: number;
        /**
         * 备份仓库所属的地域ID。
         * @example `cn-hangzhou`
         */
        VaultRegionId: string;
    }[];
}
