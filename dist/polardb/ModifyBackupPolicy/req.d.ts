export interface ModifyBackupPolicyRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~98094~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `pc-bp13wz9586voc****`
     */
    "DBClusterId": string;
    /**
     * 执行自动备份的时间段，格式为`hh:mmZ-hh:mmZ`（UTC时间），且输入的数值必须为间隔1个小时的整点，如`14:00Z-15:00Z`。
     *
     * @example `15:00Z-16:00Z`
     */
    "PreferredBackupTime"?: string;
    /**
     * 备份周期，取值范围如下：
     * * **Monday**：周一
     * * **Tuesday**：周二
     * * **Wednesday**：周三
     * * **Thursday**：周四
     * * **Friday**：周五
     * * **Saturday**：周六
     * * **Sunday**：周日
     * > * 至少需要选择2天，多个值之间用英文逗号（,）隔开。
     * > * 如果您的PolarDB MySQL版所在的地域支持跨地域备份功能，将不支持该参数。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `Monday,Tuesday`
     */
    "PreferredBackupPeriod"?: string;
    /**
     * 一级备份保留周期，取值范围为3~14，单位为天。
     * @example `3`
     */
    "DataLevel1BackupRetentionPeriod"?: string;
    /**
     * 二级备份保留周期，取值范围如下：
     * - **0**：关闭二级备份功能。
     * - **30～7300**：二级备份保留周期，单位为天。
     * - **1**：二级备份长期保留。
     *  >创建集群时，默认取值为**0**，即关闭二级备份功能。
     * @example `0`
     */
    "DataLevel2BackupRetentionPeriod"?: string;
    /**
     * 删除集群时是否保留备份：
     * - **ALL**：长期保留全部备份。
     * - **LATEST**：长期保留最后一个备份。
     * - **NONE**：不保留备份集。
     * > 默认取值为NONE。
     * @example `NONE`
     */
    "BackupRetentionPolicyOnClusterDeletion"?: string;
    /**
     * 备份频率，取值如下：
     * - **Normal**（默认）：常规备份，每天定时备份一次。
     * - **2/24H**：高频备份，每2小时备份一次。
     * - **3/24H**：高频备份，每3小时备份一次。
     * - **4/24H**：高频备份，每4小时备份一次。
     * > * 开启高频备份后，备份完成时间在24小时内的备份会全部保留。超过24小时的，系统将仅保留每日00:00点后完成的第一个备份，其他均被删除。
     * > * 开启高频备份后，备份周期**PreferredBackupPeriod**参数会默认选择一周内的所有天数（即从周一至周日）。
     * > *  如果您的PolarDB MySQL版所在的地域支持跨地域备份功能，将不支持该参数。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `Normal`
     */
    "BackupFrequency"?: string;
    /**
     * 备份频率，取值如下：
     * - **Normal**（默认）：常规备份，每天定时备份一次。
     * - **2/24H**：高频备份，每2小时备份一次。
     * - **3/24H**：高频备份，每3小时备份一次。
     * - **4/24H**：高频备份，每4小时备份一次。
     * > * PolarDB PostgreSQL版（兼容Oracle）、PolarDB PostgreSQL版不支持该参数。
     * > *  如果您的PolarDB MySQL版所在的地域不支持跨地域备份功能，将不支持该参数。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `Normal`
     */
    "DataLevel1BackupFrequency"?: string;
    /**
     * 执行自动备份的时间段，格式为`hh:mmZ-hh:mmZ`（UTC时间），且输入的数值必须为间隔1个小时的整点，如`14:00Z-15:00Z`。
     * > * PolarDB PostgreSQL版（兼容Oracle）、PolarDB PostgreSQL版不支持该参数。
     * > *  如果您的PolarDB MySQL版所在的地域不支持跨地域备份功能，将不支持该参数。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `15:00Z-16:00Z`
     */
    "DataLevel1BackupTime"?: string;
    /**
     * 一级备份周期，取值范围如下：
     * * **Monday**：周一
     * * **Tuesday**：周二
     * * **Wednesday**：周三
     * * **Thursday**：周四
     * * **Friday**：周五
     * * **Saturday**：周六
     * * **Sunday**：周日
     * > * 至少需要选择2天，多个值之间用英文逗号（,）隔开。
     * > *  PolarDB PostgreSQL版（兼容Oracle）、PolarDB PostgreSQL版不支持该参数。
     * > *  如果您的PolarDB MySQL版所在的地域不支持跨地域备份功能，将不支持该参数。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `Monday,Tuesday`
     */
    "DataLevel1BackupPeriod"?: string;
    /**
     * 二级备份周期，取值范围如下：
     * * **Monday**：周一
     * * **Tuesday**：周二
     * * **Wednesday**：周三
     * * **Thursday**：周四
     * * **Friday**：周五
     * * **Saturday**：周六
     * * **Sunday**：周日
     * > * 至少需要选择2天，多个值之间用英文逗号（,）隔开。
     * > *  PolarDB PostgreSQL版（兼容Oracle）、PolarDB PostgreSQL版不支持该参数。
     * > *  如果您的PolarDB MySQL版所在的地域不支持跨地域备份功能，将不支持该参数。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `Monday,Tuesday`
     */
    "DataLevel2BackupPeriod"?: string;
    /**
     * 二级备份跨地域备份区域。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `cn-hangzhou`
     */
    "DataLevel2BackupAnotherRegionRegion"?: string;
    /**
     * 二级备份跨地域备份保留周期。取值范围如下：
     * - **0**：关闭二级备份功能。
     * - **30～7300**：二级备份保留周期，单位为天。
     * - **1**：二级备份长期保留。
     *  >创建集群时，默认取值为**0**，即关闭二级备份跨地域备份功能。
     * @example `30`
     */
    "DataLevel2BackupAnotherRegionRetentionPeriod"?: string;
}
