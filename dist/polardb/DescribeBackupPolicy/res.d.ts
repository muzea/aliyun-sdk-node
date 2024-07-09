export interface DescribeBackupPolicyResponse {
    /**
     * 数据备份周期，取值范围如下：
     * - Monday：周一
     * - Tuesday：周二
     * - Wednesday：周三
     * - Thursday：周四
     * - Friday：周五
     * - Saturday：周六
     * - Sunday：周日
     * @example `Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday`
     */
    PreferredBackupPeriod: string;
    /**
     * 一级备份保留周期，取值范围为3~14，单位为天。
     * @example `7`
     */
    DataLevel1BackupRetentionPeriod: string;
    /**
     * 请求ID。
     * @example `EADFCE0F-9FB5-4685-B395-1440B******`
     */
    RequestId: string;
    /**
     * 执行自动备份的时间段，格式为`HH:mmZ-HH:mmZ`（UTC时间）。
     * @example `07:00Z-08:00Z`
     */
    PreferredBackupTime: string;
    /**
     * 删除集群时是否保留备份：
     * * **ALL**：长期保留全部备份。
     * * **LATEST**：长期保留最后一个备份。
     * * **NONE**（默认）：不保留备份集。
     * @example `NONE`
     */
    BackupRetentionPolicyOnClusterDeletion: string;
    /**
     * 下一次备份的时间，格式为`YYYY-MM-DDThh:mmZ`（UTC时间）。
     * @example `2020-11-16T07:30Z`
     */
    PreferredNextBackupTime: string;
    /**
     * 二级备份保留周期，取值范围如下：
     *  * 0：关闭二级备份功能。
     *  * 30～7300：二级备份保留周期，单位为天。
     *  * -1：二级备份长期保留。
     *  >创建集群时，默认取值为**0**，即关闭二级备份功能。
     * @example `0`
     */
    DataLevel2BackupRetentionPeriod: string;
    /**
     * 备份频率，取值如下：
     * - **Normal**（默认）：常规备份，每天定时备份一次。
     * - **2/24H**：增强备份，每2小时备份一次。
     * - **3/24H**：增强备份，每3小时备份一次。
     * - **4/24H**：增强备份，每4小时备份一次。
     * > * 开启增强备份后，备份完成时间在24小时内的备份会全部保留。超过24小时的，系统将仅保留每日00:00点后完成的第一个备份，其他均被删除。
     * >* 开启增强备份后，备份周期**PreferredBackupPeriod**参数会默认选择一周内的所有天数（即从周一至周日）。
     * @example `Normal`
     */
    BackupFrequency: string;
    /**
     * 备份频率，取值如下：
     * - **Normal**（默认）：常规备份，每天定时备份一次。
     * - **2/24H**：高频备份，每2小时备份一次。
     * - **3/24H**：高频备份，每3小时备份一次。
     * - **4/24H**：高频备份，每4小时备份一次。
     * > *  PolarDB PostgreSQL版（兼容Oracle）、PolarDB PostgreSQL版不支持该参数。
     * >*  如果您的PolarDB MySQL版所在的地域不支持跨地域备份功能，将不支持该参数。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `Normal`
     */
    DataLevel1BackupFrequency: string;
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
     * >*   PolarDB PostgreSQL版（兼容Oracle）、PolarDB PostgreSQL版不支持该参数。
     * >*  如果您的PolarDB MySQL版所在的地域不支持跨地域备份功能，将不支持该参数。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `Monday,Tuesday`
     */
    DataLevel1BackupPeriod: string;
    /**
     * 执行自动备份的时间段，格式为`hh:mmZ-hh:mmZ`（UTC时间），且输入的数值必须为间隔1个小时的整点，如`14:00Z-15:00Z`。
     * > *  PolarDB PostgreSQL版（兼容Oracle）、PolarDB PostgreSQL版不支持该参数。
     * >*  如果您的PolarDB MySQL版所在的地域不支持跨地域备份功能，将不支持该参数。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `15:00Z-16:00Z`
     */
    DataLevel1BackupTime: string;
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
     * >*   PolarDB PostgreSQL版（兼容Oracle）、PolarDB PostgreSQL版不支持该参数。
     * >*  如果您的PolarDB MySQL版所在的地域不支持跨地域备份功能，将不支持该参数。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `Monday,Tuesday`
     */
    DataLevel2BackupPeriod: string;
    /**
     * 二级备份跨地域备份保留周期。取值范围如下：
     * - **0**：关闭二级备份功能。
     * - **30～7300**：二级备份保留周期，单位为天。
     * - **1**：二级备份长期保留。
     *  >创建集群时，默认取值为**0**，即关闭二级备份跨地域备份功能。
     * @example `30`
     */
    DataLevel2BackupAnotherRegionRetentionPeriod: string;
    /**
     * 二级备份跨地域备份区域。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `cn-hangzhou`
     */
    DataLevel2BackupAnotherRegionRegion: string;
}
