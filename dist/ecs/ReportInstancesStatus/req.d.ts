export interface ReportInstancesStatusRequest {
    /**
     * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 异常问题对ECS实例造成的影响。取值范围：
     * - instance-hang：ECS实例不可用，或无法连接。
     * - instance-stuck-in-status：ECS实例长时间停留在某一个状态，如Starting或Stopping状态。
     * - abnormal-network：ECS实例发生网络异常。
     * - abnormal-local-disk：ECS实例挂载的本地盘出现异常。
     * - abnormal-cloud-disk：ECS实例挂载的云盘或共享块存储出现异常。
     * - others：其他异常类型。当以上影响类型不符合条件时，您可以设置`Reason=others`并在`Description`中描述更多信息。
     * @example `abnormal-local-disk`
     */
    "Reason"?: string;
    /**
     * 异常问题的详细描述。
     * @example `本地盘不可用，挂载点拒绝访问，无法加载文件。`
     */
    "Description": string;
    /**
     * 实例异常问题开始时间。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-11-30T06:32:31Z`
     */
    "StartTime"?: string;
    /**
     * 实例异常问题结束时间。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-11-31T06:32:31Z`
     */
    "EndTime"?: string;
    /**
     * 异常问题的类别。该参数仅适用于弹性裸金属服务器实例。取值范围：
     * - hardware-cpu-error：CPU故障
     * - hardware-motherboard-error：主板故障
     * - hardware-mem-error：内存故障
     * - hardware-power-error：电源故障
     * - hardware-disk-error：磁盘故障
     * - hardware-networkcard-error：网卡故障
     * - hardware-raidcard-error：SAS/RAID卡故障
     * - hardware-fan-error：风扇故障
     * - others：其他
     * @example `hardware-cpu-error`
     */
    "IssueCategory"?: string;
    /**
     * ECS实例ID列表。最多可输入100个实例ID。
     * @example `i-bp165p6xk2tmdhj0****`
     */
    "InstanceId": string[];
    /**
     * 发生相同异常问题的磁盘ID列表。可输入最多100个磁盘ID。如果您使用的是弹性裸金属服务器实例，请填写磁盘设备对应的SN列表。
     * > 当参数`Reason`值为`abnormal-local-disk`或`abnormal-cloud-disk`，或者参数`IssueCategory`值为`hardware-disk-error`时，该参数为必填参数。
     * @example `d-bp1aeljlfad7x6u1****`
     */
    "DiskId"?: string[];
    /**
     * 发生相同异常问题的磁盘的挂载的设备名列表。可输入最多100个设备名。
     * 如果您使用的是弹性裸金属服务器实例，请填写磁盘设备对应SLOT槽位信息列表。
     * > 对于弹性裸金属服务器实例，当参数`Reason`值为`abnormal-local-disk`或`abnormal-cloud-disk`，或者参数`IssueCategory`值为`hardware-disk-error`时，该参数为必填参数。
     * @example `/dev/xvdb`
     */
    "Device"?: string[];
}
