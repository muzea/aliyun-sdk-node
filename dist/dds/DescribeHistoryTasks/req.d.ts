export interface DescribeHistoryTasksRequest {
    /**
     * 待处理事件所属的地域ID，您可以通过调用[DescribeRegions](~~61933~~)接口进行查询。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 每页记录数，取值：10~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询结果的页码。取值范围：正整数。 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 当前固定为Instance。
     * @example `Instance`
     */
    "InstanceType"?: string;
    /**
     * 任务状态，用于选择对应状态的任务：
     * - Scheduled：等待执行
     * - Running：执行中
     * - Succeed：执行成功
     * - Failed：执行失败
     * - Cancelling：正在终止
     * - Canceled：已终止
     * - Waiting：等待预设时间
     * 默认为空，表示全选，如需选择多个状态请用英文逗号（,）分隔。
     * @example `Succeed,Running,Waiting`
     */
    "Status"?: string;
    /**
     * 实例ID，用于查询对应实例的任务，默认为空，表示不限制。如需查询多个实例请用英文逗号（,）分隔，最多支持30个。
     * @example `dds-8vb38f0e7933xxxx`
     */
    "InstanceId"?: string;
    /**
     * 任务ID，用于查询已知ID的任务。默认为空，表示不限制。如需查询多个请用英文逗号（,）分隔，最多支持30个。
     * @example `t-0mq1yyhm3ffl2bxxxx`
     */
    "TaskId"?: string;
    /**
     * 任务类型，用于查询特定类型任务情况，默认为空，表示不限制，取值如下：
     * - CreateIns：创建实例
     * - DeleteIns：删除实例
     * - ChangeVariable：参数调整
     * - ModifyInsConfig：配置变更
     * - RestartIns：重启实例
     * - HaSwitch：实例主备切换
     * - CloneIns：克隆实例
     * - KernelVersionUpgrade：内核版本升级
     * - ProxyVersionUpgrade：代理版本升级
     * - ModifyAccount：账号变更
     * - ModifyInsSpec：规格变更或迁移
     * - CreateReadIns：创建只读实例
     * - StartIns：启动实例
     * - StopIns：暂停实例
     * - ModifyNetwork：网络变更
     * - LockIns： 锁定实例
     * - UnlockIns：解锁实例
     * - DiskOnlineExpansion：磁盘在线扩容
     * - StorageOnlineExpansion：存储在线扩容
     * - AddInsNode：增加节点
     * - DeleteInsNode：删除节点
     * - ManualBackupIns：手动备份实例
     * - ModifyInsStorageType：修改存储类型
     * @example `DeleteInsNode`
     */
    "TaskType"?: string;
    /**
     * 运维任务开始的时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间），最早支持查询30天前的数据。
     * @example `2023-03-15T03:41:26Z`
     */
    "FromStartTime": string;
    /**
     * 运维任务结束的时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间），最早支持查询30天前的数据。
     * @example `2023-03-16T07:21:31Z`
     */
    "ToStartTime": string;
    /**
     * 任务执行耗时的最小值。用于筛选任务执行耗时大于此时间的任务，单位秒。默认0，表示不限制。
     * @example `0`
     */
    "FromExecTime"?: number;
    /**
     * 任务执行耗时的最大值。用于筛选任务执行耗时不小于此时间的任务，单位秒。默认0，表示不限制。
     * @example `0`
     */
    "ToExecTime"?: number;
}
