interface DescribeDisksRequest {
    /**
    * 云盘所属于的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 可用区ID。
    * @example `cn-hangzhou-g`
    */ "ZoneId"?: string;
    /**
    * 云盘ID。一个带有格式的JSON数组，最多100个ID，用半角逗号（,）隔开。
    * @example `["d-xxxxxxxxx", "d-yyyyyyyyy", … "d-zzzzzzzzz"]`
    */ "DiskIds"?: string;
    /**
    * 实例ID。
    * @example `i-instance1`
    */ "InstanceId"?: string;
    /**
    * 要查询的云盘或本地盘类型。取值范围：
    *
    * - all：同时查询系统盘与数据盘
    * - system：只查询系统盘
    * - data：只查询数据盘
    * 默认值：all
    * @example `all`
    */ "DiskType"?: string;
    /**
    * 云盘种类。取值范围：
    *
    * - all：所有云盘以及本地盘
    * - cloud：普通云盘
    * - cloud_efficiency：高效云盘
    * - cloud_ssd：SSD盘
    * - cloud_essd：ESSD云盘
    * - local_ssd_pro：I/O密集型本地盘
    * - local_hdd_pro：吞吐密集型本地盘
    * - ephemeral：（已停售）本地盘
    * - ephemeral_ssd：（已停售）本地SSD盘
    * 默认值：all
    * @example `all`
    */ "Category"?: string;
    /**
    * 云盘状态，参见[普通云盘状态](~~25689~~)。取值范围：
    * -   In_use
    * -   Available
    * -   Attaching
    * -   Detaching
    * -   Creating
    * -   ReIniting
    * -   All
    * 默认值：All
    * @example `All`
    */ "Status"?: string;
    /**
    * 创建云盘使用的快照ID。
    * @example `s-snapshotid1`
    */ "SnapshotId"?: string;
    /**
    * 要查询的云盘是否支持卸载，该属性为不可修改属性。取值范围：
    * -   true：可卸载云盘，可以独立存在且可以自由在可用区内挂载和卸载
    * -   false：不可卸载云盘，不可以独立存在且不可以自由在可用区内挂载和卸载
    * 这个属性为`true`的云盘才能挂载和卸载，其中：
    * -   本地盘
    * -   本地SSD盘
    * -   系统盘
    * -   包年包月数据盘
    * 该属性都为`false`。
    * @example `false`
    */ "Portable"?: boolean;
    /**
    * 云盘是否随实例释放。取值范围：
    * -   true：实例释放时，这块云盘随实例一起释放
    * -   false：实例释放时，这块云盘保留不释放
    * 默认值：false
    * @example `false`
    */ "DeleteWithInstance"?: boolean;
    /**
    * 删除云盘时，是否同时删除自动快照。取值范围：
    * -   true：同时删除自动快照
    * -   false：保留自动快照
    * 默认值：false
    * @example `false`
    */ "DeleteAutoSnapshot"?: boolean;
    /**
    * 云盘或本地盘状态列表的页码，起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值：100
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 云盘或本地盘名称。
    * @example `JoshuaFinance`
    */ "DiskName"?: string;
    /**
    * 根据自动快照策略ID查询云盘。
    * @example `auto_20140724_2`
    */ "AutoSnapshotPolicyId"?: string;
    /**
    * 云盘是否执行自动快照策略（前提是用户整体的自动快照策略已经开启）。取值范围：
    * -   true：表示这块云盘执行自动快照策略
    * -   false：表示这块云盘不执行自动快照策略
    * 默认值：false
    * @example `false`
    */ "EnableAutoSnapshot"?: boolean;
    /**
    * 云盘是否设置了自动快照策略。
    * @example `false`
    */ "EnableAutomatedSnapshotPolicy"?: boolean;
    /**
    * 云盘或本地盘的计费方式。取值范围：
    * - PrePaid：包年包月
    * - PostPaid：按量付费
    * @example `PostPaid`
    */ "DiskChargeType"?: string;
    /**
    * 云盘或本地盘被锁定的原因。取值范围：
    * - financial：因欠费被锁定
    * - security：因安全原因被锁定
    * - recycling：抢占式实例的待释放锁定状态
    * - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定
    * @example `recycling`
    */ "LockReason"?: string;
    /**
    * 查询资源时的筛选键。取值必须为CreationStartTime。
    * @example `CreationStartTime`
    */ "Filter.1.Key"?: string;
    /**
    * 查询资源时的筛选键。取值必须为CreationEndTime。
    * @example `CreationEndTime`
    */ "Filter.2.Key"?: string;
    /**
    * 查询资源时的筛选值。取值必须为资源创建的开始时间点（CreationStartTime）。
    * @example `2017-12-05T22:40:00Z`
    */ "Filter.1.Value"?: string;
    /**
    * 查询资源时的筛选值。取值必须为资源创建的结束时间点（CreationEndTime）。
    * @example `2017-12-06T22:40:00Z`
    */ "Filter.2.Value"?: string;
    "Tag"?: string[];
    /**
    * 云盘或本地盘所在的企业资源组ID。
    * @example `rg-resourcegroupid1`
    */ "ResourceGroupId"?: string;
    /**
    * 是否是共享块存储。
    * @example `false`
    */ "EnableShared"?: boolean;
    /**
    * 是否过滤加密云盘。取值范围：
    * -   true：只筛选出加密云盘
    * -   false：不做加密属性的筛选
    * 默认值：false
    * @example `false`
    */ "Encrypted"?: boolean;
    "AdditionalAttributes"?: string[];
    /**
    * 是否只预检此次请求。
    * -   true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
    * -   false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
    * 默认值：false
    * @example `false`
    */ "DryRun"?: boolean;
    /**
    * 云盘使用的KMS密钥ID。
    * @example `0e478b7a-4262-4802-b8cb-00d3fb408***`
    */ "KMSKeyId"?: string;
}
export { DescribeDisksRequest };